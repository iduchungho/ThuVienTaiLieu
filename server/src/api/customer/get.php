<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/database.php';
    include_once '../../models/customer.php';

    // init & connect database
    $database = new Database();
    $db = $database->connect();

    // create new customer
    $customer = new Customer($db);

    // query customer
    $result = $customer->getAllCustomer();
    $num = $result->rowCount();

    if($num > 0){
        $customer_array = array();
        $customer_array['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $customer_item = array(
                'customer_id' => $customer_id,
                'first_name' => $first_name,
                'last_name' => $last_name,
                'email_id' => $email_id,
                'phone_no' => $phone_no,
                'state' => $state,
                'city' => $city
            );
            array_push($customer_array['data'], $customer_item);
        }
        echo json_encode($customer_array);
    }
    else{
        echo json_encode(
            array('message' => 'no customer found')
        );
    }