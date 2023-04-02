<?php 
// api.php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/restaurant.php';

$database = new Database();
$db = $database->connect();
$restaurant = new Restaurant($db);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->password) && !empty($data->first_name) && !empty($data->last_name) && !empty($data->designation)) {
        $restaurant->password = $data->password;
        $restaurant->first_name = $data->first_name;
        $restaurant->last_name = $data->last_name;
        $restaurant->designation = $data->designation;

        if ($restaurant->create()) {
            http_response_code(201);
            echo json_encode(["message" => "Restaurant created successfully."]);
        } else {
            http_response_code(503);
            echo json_encode(["message" => "Unable to create restaurant."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Incomplete data."]);
    }
}else {
    http_response_code(400);
    echo json_encode(["message" => "Invalid request."]);
}
