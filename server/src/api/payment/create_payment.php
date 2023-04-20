<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/payment.php';
include_once '../../libs/auth.php';
include_once '../../libs/sess.php';
include_once '../../libs/authorization.php';
if (!auth::valid()) {
    return;
}
$database = new Database();
$db = $database->connect();
$payment = new Payment($db);
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->order_id) && !empty($data->payment_type) && !empty($data->payment_status) && !empty($data->time_stamp)) {
    $payment->order_id = $data->order_id;
    $payment->payment_type = $data->payment_type;
    $payment->payment_status = $data->payment_status;
    $payment->time_stamp = $data->time_stamp;
    try{
        $payment->create();
        http_response_code(201);
        echo json_encode([
            "message" => "Payment was created.",
            "success" => true
        ]);
        $db->close();
    }
    catch (Exception $e){
        http_response_code(503);
        echo json_encode([
            "message" => "Unable to create payment.",
            "error" => $e->getMessage(),
            "success" => false
        ]);
        $db->close();
    }
//    if ($payment->create()) {
//        http_response_code(201);
//        echo json_encode(array("message" => "Payment was created."));
//    } else {
//        http_response_code(503);
//        echo json_encode(array("message" => "Unable to create payment."));
//    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create payment. Data is incomplete."));
}
?>