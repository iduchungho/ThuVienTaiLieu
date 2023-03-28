<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: GET');

    include_once '../../config/database.php';
    include_once '../../models/customer.php';

    $database = new Database();
    $db = $database->connect();

    $customer = new Customer($db);

    $param = isset($_GET['id']) ? $_GET['id'] : die();

    $result = $customer->getUserByID($param);
    $num = mysqli_num_rows($result);

    if($num){
        $row = mysqli_fetch_assoc($result);
        $resultJSON['data'] = array();
        $data = array(
            "customer_id" => $row['customer_id'],
            "first_name" => $row['last_name'],
            "email_id" => $row['email_id'],
            "password" => $row['password'],
            "phone_no" => $row['phone_no'],
            "city" => $row['city'],
            "role" => $row['role'],
            "avatar" => $row['avatar']

        );
        $resultJSON['data'][] = $data;
        echo json_encode($resultJSON);
    }
    else {
        echo json_encode(array(
            "error" => "no customer was found",
        ));
    }
    $db->close();