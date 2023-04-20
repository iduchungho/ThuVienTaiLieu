<?php
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

  try {
      $menu->create();
      http_response_code(201);
      echo json_encode([
          "message" => "Menu item was created.",
          "success" => true
      ]);
      $db->close();
  }
  catch (Exception $e){
      http_response_code(503);
      echo json_encode([
          "message" => "Unable to create menu item.",
          "error" => $e->getMessage(),
          "success" => false
      ]);
      $db->close();
  }
} else {
  http_response_code(400);
  echo json_encode(array("message" => "Data is incomplete. Provide name, description, and image."));
}

?>