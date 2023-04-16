<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/orders.php';
include_once '../../libs/auth.php';
include_once '../../libs/sess.php';
include_once '../../libs/authorization.php';
if(!auth::valid()){
    return;
}
if (!isset($_GET['order_id'])) {
    http_response_code(400);
    echo json_encode(array("message" => "order_id is required."));
    exit();
}

$order_id = intval($_GET['order_id']);

$database = new Database();
$db = $database->connect();
$order = new Orders($db);
$order->order_id = $order_id;

$result = $order->getById();
$num = $result->num_rows;

if ($num > 0) {
    $order_data = $result->fetch_assoc();

    http_response_code(200);
    echo json_encode($order_data);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Order not found."));
}
?>