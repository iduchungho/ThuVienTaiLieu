<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/payment_details.php';
$database = new Database();
$db = $database->connect();
$paymentDetails = new payment_details($db);

if (isset($_GET['payment_id'])) {
    $paymentDetails->payment_id = intval($_GET['payment_id']);
    $result = $paymentDetails->getByPaymentId();

    if ($result) {
        http_response_code(200);
        echo json_encode($result);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Payment details not found."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to get payment details. Missing payment ID."));
}
?>