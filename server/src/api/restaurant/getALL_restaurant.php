<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include_once '../../config/database.php';
include_once '../../models/restaurant.php';
include_once '../../libs/auth.php';
include_once '../../libs/sess.php';
include_once '../../libs/authorization.php';
if(!auth::validAdmin()){
    return;
}
$database = new Database();
$db = $database->connect();
$restaurant = new Restaurant($db);



$result = $restaurant->readAll();

$num = $result->num_rows;

if ($num > 0) {
    $restaurants_arr = [];
    $restaurants_arr["records"] = [];

    while ($row = $result->fetch_assoc()) {
        $restaurant_item = [
            "restaurant_id" => $row['restaurant_id'],
            "password" => $row['password'],
            "first_name" => $row['first_name'],
            "last_name" => $row['last_name'],
            "designation" => $row['designation']
        ];

        array_push($restaurants_arr["records"], $restaurant_item);
    }

    http_response_code(200);
    echo json_encode($restaurants_arr);
} else {
    http_response_code(404);
    echo json_encode(["message" => "No restaurants found."]);
}