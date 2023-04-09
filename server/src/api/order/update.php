<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once '../../config/database.php';
include_once '../../models/orders.php';

$database = new Database();
$db = $database->connect();
$orders = new Orders($db);

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->order_id) &&!empty($data->order_status) && !empty($data->time_stamp) && !empty($data->customer_id) && !empty($data->menu_id) && !empty($data->quantity)) {
    $orders->order_id = $data->order_id;
    $orders->order_status = $data->order_status;
    $orders->time_stamp = $data->time_stamp;
    $orders->customer_id = $data->customer_id;
    $orders->menu_id = $data->menu_id;
    $orders->quantity = $data->quantity;

    if ($orders->updateById()) {
        http_response_code(200);
        echo json_encode(array("message" => "Menu item was updated."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to update menu item."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Data is incomplete. Provide id, title, description, and image."));
}
?>