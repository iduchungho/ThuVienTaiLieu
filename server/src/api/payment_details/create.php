<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/payment_details.php';
include_once '../../libs/auth.php';
include_once '../../libs/sess.php';
include_once '../../libs/authorization.php';
if(!auth::valid()){
    return;
}
$data = json_decode(file_get_contents("php://input"));
if (!isset($data->payment_id) ||!isset($data->customer_id) || !isset($data->card_number) || !isset($data->card_holder_name) || !isset($data->cvv) || !isset($data->exp_month) || !isset($data->exp_year) || !isset($data->time_stamp)) {
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete data."));
    exit();
}

$database = new Database();
$db = $database->connect();
$payment_details = new payment_details($db);
$payment_details->payment_id = $data->payment_id;
$payment_details->customer_id = $data->customer_id;
$payment_details->card_number = $data->card_number;
$payment_details->card_holder_name = $data->card_holder_name;
$payment_details->cvv = $data->cvv;
$payment_details->exp_month = $data->exp_month;
$payment_details->exp_year = $data->exp_year;
$payment_details->time_stamp = $data->time_stamp;

try{
    $payment_details->create();
    http_response_code(201);
    echo json_encode([
        "message" => "payment_details was created.",
        "success" => true
    ]);
    $db->close();
}
catch (Exception $e){
    http_response_code(503);
    echo json_encode([
        "message" => "Unable to create payment_details.",
        "error" => $e->getMessage(),
        "success" => false
    ]);
    $db->close();
}

//if ($payment_details->create()) {
//    http_response_code(201);
//    echo json_encode(array("message" => "payment_details was created."));
//} else {
//    http_response_code(503);
//    echo json_encode(array("message" => "Unable to create payment_details."));
//}
?>