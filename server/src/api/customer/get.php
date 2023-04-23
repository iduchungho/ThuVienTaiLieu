<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: GET');

    include_once '../../config/database.php';
    include_once '../../models/customer.php';

    // init & connect database
    $database = new Database();
    $db = $database->connect();

    // create new customer
    $customer = new Customer($db);

    // query customer
    $result = $customer->getAll();
    $num = mysqli_num_rows($result);

    if($num > 0){
        $customer_array = array();
        $customer_array['data'] = array();

        while($row = mysqli_fetch_assoc($result)){
            $customer_item = array(
                'customer_id' => $row['customer_id'],
                'first_name' => $row['first_name'],
                'last_name' => $row['last_name'],
                'email_id' => $row['email_id'],
                'phone_no' => $row['phone_no'],
                'city' => $row['city'],
                'role' => $row['role']
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
    $db->close();