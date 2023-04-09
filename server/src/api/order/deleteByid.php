<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/orders.php';

$database = new Database();
$db = $database->connect();
$orders = new Orders($db);
$data = json_decode(file_get_contents("php://input"));


if (isset($_GET['order_id'])) {
    $orders->order_id = $_GET['order_id'];

    if ($orders->deleteById()) {
        http_response_code(200);
        echo json_encode(array("message" => "order item was deleted."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to delete order item."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to delete order item. Data is incomplete."));
}

?>