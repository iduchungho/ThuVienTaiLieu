<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
include_once '../../config/database.php';
include_once '../../models/menu.php';
include_once '../../config/cloudinary.php';

$cloud = new Cloud();
// init database
$database = new Database();
$db = $database->connect();

$menu = new Menu($db);
// $data = json_decode(file_get_contents("php://input"));
$img = isset($_FILES['img']) ? $_FILES['img']['tmp_name'] : null;
$menu_name = isset($_POST['menu_name']) ? $_POST['menu_name'] : null;
$price = isset($_POST['price']) ? $_POST['price'] : null;

// echo json_encode($img);
// return;

if ($menu_name && $price && $img) {

  try {
      $secure_url = $cloud->uploadImage($img);
  } catch (\Cloudinary\Api\Exception\ApiError $e) {
      echo json_encode(
          array(
              "error" => $e
          )
      );
  }

  $menu->menu_name = $menu_name;
  $menu->price = $price;
  $menu->img = $secure_url;

  try {
      $menu->create();
      http_response_code(200);
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