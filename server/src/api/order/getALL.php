<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/orders.php';
$database = new Database();
$db = $database->connect();
$order = new Orders($db);

$result = $order->getAll();
$num = $result->num_rows;

if ($num > 0) {
    $orders_arr = array();
    while ($row = $result->fetch_assoc()) {
        array_push($orders_arr, $row);
    }

    http_response_code(200);
    echo json_encode($orders_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No orders found."));
}
?>