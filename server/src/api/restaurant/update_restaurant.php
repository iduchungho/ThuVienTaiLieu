<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT");
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

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->restaurant_id) &&
    !empty($data->password) &&
    !empty($data->first_name) &&
    !empty($data->last_name) &&
    !empty($data->designation)
) {
    $restaurant->restaurant_id = $data->restaurant_id;
    $restaurant->password = $data->password;
    $restaurant->first_name = $data->first_name;
    $restaurant->last_name = $data->last_name;
    $restaurant->designation = $data->designation;

    try{
        $restaurant->update();
        http_response_code(201);
        echo json_encode([
            "message" => "Restaurant was updated.",
            "success" => true
        ]);
        $db->close();
    }
    catch (Exception $e){
        http_response_code(503);
        echo json_encode([
            "message" => "Unable to update restaurant.",
            "error" => $e->getMessage(),
            "success" => false
        ]);
        $db->close();
    }
//    if ($restaurant->update()) {
//        http_response_code(200);
//        echo json_encode(["message" => "Restaurant was updated."]);
//    } else {
//        http_response_code(503);
//        echo json_encode(["message" => "Unable to update restaurant."]);
//    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Unable to update restaurant. Data is incomplete."]);
}