<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../models/payment.php';
$database = new Database();
$db = $database->connect();
$payment = new Payment($db);

if (isset($_GET['id'])) {
    $payment->id = $_GET['id'];
    $payment_data = $payment->getById();

    if ($payment_data) {
        http_response_code(200);
        echo json_encode($payment_data);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Payment not found."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Missing payment ID."));
}
?>