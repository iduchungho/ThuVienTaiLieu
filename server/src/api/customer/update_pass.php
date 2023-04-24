<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');

    include_once '../../models/customer.php';
    include_once '../../config/database.php';
    include_once '../../libs/sess.php';
    include_once '../../libs/authorization.php';

    // init database
    $database = new Database();
    $db = $database->connect();

    // init new customer object
    $customer = new Customer($db);
    //get raw posted data
    $data = json_decode(file_get_contents("php://input"));

    $customer->customer_id = $data->customer_id;
    $customer->password = $data->password;

    try {
        $customer->update_pass();
        echo json_encode([
            'message' => 'passsword updated',
            'success' => true
        ]);
        $db->close();
    }
    catch (Exception $e){
        echo json_encode([
            'message' => 'passsword not update',
            'error' => $e->getMessage(),
            'success' => true
        ]);
        $db->close();
    }
//    if($customer->update()) {
//        echo json_encode(
//            array('message' => 'customer updated')
//        );
//    }
//    else{
//        echo json_encode(
//            array('message' => 'customer not update')
//        );
//    }
//    $db->close();

