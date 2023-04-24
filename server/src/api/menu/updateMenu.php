<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: PUT");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once '../../config/database.php';
include_once '../../models/menu.php';

$database = new Database();
$db = $database->connect();

$menu = new Menu($db);

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->menu_id) && !empty($data->menu_name) && !empty($data->price) && !empty($data->img)) {
    $menu->menu_id = $data->menu_id;
    $menu->menu_name = $data->menu_name;
    $menu->price = $data->price;
    $menu->img = $data->img;

    if ($menu->update()) {
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