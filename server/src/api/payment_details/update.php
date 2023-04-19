<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT");
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
$database = new Database();
$db = $database->connect();
$paymentDetails = new payment_details($db);

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->payment_id) && !empty($data->customer_id) && !empty($data->card_number) && !empty($data->card_holder_name) && !empty($data->cvv) && !empty($data->exp_month) && !empty($data->exp_year) && !empty($data->time_stamp)) {
    $paymentDetails->payment_id = $data->payment_id;
    $paymentDetails->customer_id = $data->customer_id;
    $paymentDetails->card_number = $data->card_number;
    $paymentDetails->card_holder_name = $data->card_holder_name;
    $paymentDetails->cvv = $data->cvv;
    $paymentDetails->exp_month = $data->exp_month;
    $paymentDetails->exp_year = $data->exp_year;
    $paymentDetails->time_stamp = $data->time_stamp;

    try{
        $paymentDetails->updateByPaymentId();
        http_response_code(201);
        echo json_encode([
            "message" => "Payment details were updated.",
            "success" => true
        ]);
        $db->close();
    }
    catch (Exception $e){
        http_response_code(503);
        echo json_encode([
            "message" => "Unable to update payment details.",
            "error" => $e->getMessage(),
            "success" => false
        ]);
        $db->close();
    }
//    if ($paymentDetails->updateByPaymentId()) {
//        http_response_code(200);
//        echo json_encode(array("message" => "Payment details were updated."));
//    } else {
//        http_response_code(503);
//        echo json_encode(array("message" => "Unable to update payment details."));
//    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to update payment details. Data is incomplete."));
}
?>
