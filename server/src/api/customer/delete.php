<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');

    include_once '../../config/database.php';
    include_once '../../models/customer.php';

    $param = isset($_GET['id']) ? $_GET['id'] : die();
    $database = new Database();
    $db = $database->connect();
    $customer = new Customer($db);


    if ($customer->delete($param)){
        echo json_encode(
            array("message" => "customer delete successfully")
        );
    }
    else {
        echo json_encode(
          array("message" => "can't delete customer, something is wrong")
        );
    }

