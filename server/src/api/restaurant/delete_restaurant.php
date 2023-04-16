<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
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

// $data = json_decode(file_get_contents("php://input"));

// if (!empty($data->restaurant_id)) {
//     $restaurant->restaurant_id = $data->restaurant_id;

//     if ($restaurant->delete()) {
//         http_response_code(200);
//         echo json_encode(["message" => "Restaurant was deleted."]);
//     } else {
//         http_response_code(503);
//         echo json_encode(["message" => "Unable to delete restaurant."]);
//     }
// } else {
//     http_response_code(400);
//     echo json_encode(["message" => "Unable to delete restaurant. Data is incomplete."]);
// }
$restaurant->restaurant_id = intval($_GET["restaurant_id"]);
if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    if (!empty($_GET["restaurant_id"])) {
        if ($restaurant->delete($restaurant->restaurant_id)) {
            http_response_code(200);
            echo json_encode(["message" => "Restaurant deleted successfully."]);
        } else {
            http_response_code(503);
            echo json_encode(["message" => "Unable to delete restaurant."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Incomplete data."]);
    }
}
else {
    http_response_code(400);
    echo json_encode(["message" => "Invalid request."]);
}
