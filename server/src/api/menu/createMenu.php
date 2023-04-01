<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/menu.php';

// init database
$database = new Database();
$db = $database->connect();

$menu = new Menu($db);
$data = json_decode(file_get_contents("php://input"));
if (!empty($data->menu_name) && !empty($data->price)) {
  $menu->menu_name = $data->menu_name;
  $menu->price = $data->price;
  $menu->img = $data->img;
  if ($menu->create()) {
    http_response_code(201);
    echo json_encode(array("message" => "Menu item was created."));
  } else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to create menu item."));
  }

} else {
  http_response_code(400);
  echo json_encode(array("message" => "Data is incomplete. Provide name, description, and image."));
}

?>