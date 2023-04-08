<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: multipart/form-data');
    header('Access-Control-Allow-Methods: POST');

    include_once '../../models/customer.php';
    include_once '../../config/database.php';
    include_once '../../config/cloudinary.php';

    $cloud = new Cloud();
    $database = new Database();
    $db = $database->connect();
    $customer = new Customer($db);

    $file = isset($_FILES['img']) ? $_FILES['img']['tmp_name'] : die();
    $param = isset($_GET['id']) ? $_GET['id'] : die();

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
        echo json_encode(
            array('message' => 'images updated')
        );
    } else {
        echo json_encode(
            array('message' => 'customer not update')
        );
    }
    $db->close();