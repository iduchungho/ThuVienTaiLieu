<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
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

$data = json_decode(file_get_contents("php://input"));
if (!isset($data->customer_id) || !isset($data->menu_id) || !isset($data->quantity) || !isset($data->order_status) || !isset($data->time_stamp)) {
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete data."));
    exit();
}

$database = new Database();
$db = $database->connect();
$order = new Orders($db);
// $order->order_id = $data->order_id;
$order->customer_id = $data->customer_id;
$order->menu_id = $data->menu_id;
$order->quantity = $data->quantity;
$order->order_status = $data->order_status;
$order->time_stamp = $data->time_stamp;

try{
    $order->create();
    http_response_code(200);
    $stmt =mysqli_fetch_assoc($order->GetMaxID());
    echo json_encode([
        "message" => "order was created successfully",
        "success" => true,
        "order_id" => $stmt["LAST_INSERT_ID()"]
    ]);
    $db->close();
}
catch(Exception $e){
    echo json_encode([
        "message" => "order was not created",
        "success" => false,
        "error" => $e->getMessage
    ]);
    $db->close();
}

// if ($order->create()) {
//     http_response_code(201);
//     echo json_encode(array("message" => "Order was created."));
// } else {
//     http_response_code(503);
//     echo json_encode(array("message" => "Unable to create order."));
// }
?>