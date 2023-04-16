<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');

include_once '../../libs/sess.php';
include_once '../../libs/authorization.php';

if ($_SERVER['REQUEST_METHOD'] == 'PUT'){
    $param = isset($_GET['id']) ? $_GET['id'] : die();

    sess::start($param);
    $valid = Authorization::validation($param);
    $token = sess::readTokenFromSessionID($param);
    sess::shutdown();

    if (!$valid){
        echo json_encode([
            'message' => 'require user',
            'success' => false
        ]);
        return;
    }
    else if ($token != null){
        echo json_encode([
            'status' => sess::getSessionStatus($param),
            'message' => 'your session has been wiped',
            'token' =>  $token,
            'valid' => $valid
        ]);
    }
    else {
        http_response_code(403);
        /*
         * PHP_SESSION_NONE : 1
         * PHP_SESSION_ACTIVE : 2
         * PHP_SESSION_DISABLED : 0
         * */
        echo json_encode([
            'status' => sess::getSessionStatus($param),
            'message' => 'your session does not exist',
            'valid' => $valid
        ]);
    }
}
else {
    http_response_code(403);
    echo json_encode([
        'status' => 0,
        'message' => 'Access Denied',
    ]);
}

