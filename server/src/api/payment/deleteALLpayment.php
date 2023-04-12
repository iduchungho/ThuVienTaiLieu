<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/payment.php';
$database = new Database();
$db = $database->connect();
$payment = new Payment($db);

if ($payment->deleteAll()) {
    http_response_code(200);
    echo json_encode(array("message" => "All payments were deleted."));
} else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to delete all payments."));
}
?>