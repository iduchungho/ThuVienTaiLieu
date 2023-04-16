<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../models/payment.php';
include_once '../../libs/auth.php';
include_once '../../libs/sess.php';
include_once '../../libs/authorization.php';
if(!auth::valid()){
    return;
}
$database = new Database();
$db = $database->connect();
$payment = new Payment($db);
$result = $payment->getAll();

$num = $result->num_rows;
if ($num > 0) {
    $payments_arr = array();
    $payments_arr["payments"] = array();

    while ($row = $result->fetch_assoc()) {
        extract($row);
        $payment_item = array(
            "id" => $id,
            "order_id" => $order_id,
            "payment_type" => $payment_type,
            "payment_status" => $payment_status,
            "time_stamp" => $time_stamp
        );

        array_push($payments_arr["payments"], $payment_item);
    }

    http_response_code(200);
    echo json_encode($payments_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No payments found."));
}
?>