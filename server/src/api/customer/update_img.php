<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: multipart/form-data');
    header('Access-Control-Allow-Methods: POST');

    include_once '../../models/customer.php';
    include_once '../../config/database.php';
    include_once '../../config/cloudinary.php';

    include_once '../../libs/sess.php';
    include_once '../../libs/authorization.php';

    $cloud = new Cloud();
    $database = new Database();
    $db = $database->connect();
    $customer = new Customer($db);

    $file = isset($_FILES['img']) ? $_FILES['img']['tmp_name'] : die();
    $param = isset($_GET['id']) ? $_GET['id'] : die();

    sess::start($param);
    $valid = Authorization::validation($param);
    // sess::shutdown();

    if (!$valid){
        echo json_encode([
            'message' => 'require user',
            'success' => false
        ]);
        return;
    }

    $customer->customer_id = $param;
    $secure_url = "";

    try {
        $secure_url = $cloud->uploadImage($file);
    } catch (\Cloudinary\Api\Exception\ApiError $e) {
        echo json_encode(array(
           "error" => $e
        ));
    }
//    echo json_encode(
//        array('message' => '$secure_url')
//    );

    if($customer->uploadImage($secure_url)) {
        echo json_encode([
            'message' => 'images updated',
            'success' => true
        ]);
    } else {
        echo json_encode([
            'message' => 'images can not update',
            'success' => false
        ]);
    }
    $db->close();