<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

include_once '../../config/database.php';
include_once '../../models/customer.php';
include_once '../../models/authorization.php';
include_once '../../models/sess.php';


$database = new Database();
$db = $database->connect();
$customer = new Customer($db);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $password = $data->password;
    $id = $customer->login($email, $password);
    if ($id != -1){
        //echo json_encode(Authorization::auth($id));
        // save token to session
        Sess::generateSession($id, Authorization::auth($id));
        echo json_encode([
            'status' => 0,
            'message' => 'OK',
            'data' => Authorization::auth($id)
        ]);
    } else{
        http_response_code(403);
        echo json_encode([
            'status' => 0,
            'message' => 'Access Denied',
        ]);
    }

} else {
    http_response_code(403);
    echo json_encode([
        'status' => 0,
        'message' => 'Access Denied',
    ]);
}