<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

include_once '../../config/database.php';
include_once '../../models/customer.php';
include_once '../../libs/authorization.php';
include_once '../../libs/sess.php';


$database = new Database();
$db = $database->connect();
$customer = new Customer($db);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $password = $data->password;
    $id = $customer->login($email, $password);
    $result = $customer->getCustomerByID($id);
    $row = mysqli_fetch_assoc($result);

    if ($id != -1){
        //echo json_encode(Authorization::auth($id));
        // save token to session
        Sess::generateSession($id, Authorization::auth($id, $row['role']));
        $stmt = $customer->getCustomerByID($id);
        if(mysqli_num_rows($stmt)){
            $row = mysqli_fetch_assoc($stmt);
            echo json_encode([
                'status' => 1,
                'message' => 'OK',
                'token' => sess::readTokenFromSessionID($id),
                'data' => [
                    "customer_id" => $row['customer_id'],
                    "first_name" => $row['first_name'],
                    "last_name" => $row['last_name'],
                    "email_id" => $row['email_id'],
                    "phone_no" => $row['phone_no'],
                    "city" => $row['city'],
                    "avatar" => $row['avatar']
                ]
            ]);
        }
        else {
            http_response_code(403);
            echo json_encode([
                'status' => 0,
                'message' => 'Access Denied',
            ]);
        }

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