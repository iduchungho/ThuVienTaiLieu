<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/restaurant.php';
$database = new Database();
$db = $database->connect();
$restaurant = new Restaurant($db);

$restaurant->restaurant_id = intval($_GET["restaurant_id"]);
if ($_SERVER["REQUEST_METHOD"] == "GET" && !empty($_GET["restaurant_id"])) {
   
    $result = $restaurant->getRestaurantById($restaurant->restaurant_id);
    
    if ($result) {
        http_response_code(200);
        echo json_encode($result);
    } else {
        http_response_code(404);
        echo json_encode(["message" => "Restaurant not found."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Invalid request."]);
}
