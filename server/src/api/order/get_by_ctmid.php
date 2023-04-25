<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../models/orders.php';
include_once '../../libs/auth.php';
include_once '../../libs/sess.php';
include_once '../../libs/authorization.php';
if(!auth::valid()){
    return;
}
$database = new Database();
$db = $database->connect();
$order = new Orders($db);

try{
    $id = $_GET['id'];
    $result = $order->GetByCustomerID($id);
    $num = $result->num_rows;
    if ($num > 0){
        $orders_arr = array();
        while ($row = $result->fetch_assoc()) {
            array_push($orders_arr, $row);
        }
        echo json_encode([
            "success" => true,
            "data" => $orders_arr
        ]);
    }
    $db->close();
}
catch(Exception $e){
    echo json_encode([
        "error" => $e->getMessage(),
        "success" => false
    ]);
    $db->close();
}
