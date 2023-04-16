<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
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

$result = $paymentDetails->getAll();
$num = $result->num_rows;

if ($num > 0) {
    $paymentDetails_arr = array();
    while ($row = $result->fetch_assoc()) {
        array_push($paymentDetails_arr, $row);
    }

    http_response_code(200);
    echo json_encode($paymentDetails_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No payment details found."));
}
?>