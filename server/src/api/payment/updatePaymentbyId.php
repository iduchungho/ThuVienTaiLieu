<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/payment.php';
$database = new Database();
$db = $database->connect();
$payment = new Payment($db);

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id) && !empty($data->order_id) && !empty($data->payment_type) && !empty($data->payment_status) && !empty($data->time_stamp)) {
    $payment->id = $data->id;
    $payment->order_id = $data->order_id;
    $payment->payment_type = $data->payment_type;
    $payment->payment_status = $data->payment_status;
    $payment->time_stamp = $data->time_stamp;

    if ($payment->updateById()) {
        http_response_code(200);
        echo json_encode(array("message" => "Payment was updated."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to update payment."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to update payment. Data is incomplete."));
}
?>