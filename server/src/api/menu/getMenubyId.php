<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');

include_once '../../config/database.php';
include_once '../../models/menu.php';

$database = new Database();
$db = $database->connect();
$api = new Menu($db);
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['menu_id'])) {
      $id = $_GET['menu_id'];
      $menu = $api->get_menu_by_id($id);
      if ($menu) {
        echo json_encode($menu);
      } else {
        http_response_code(404); // Not Found
        echo json_encode(array('error' => 'Menu item not found'));
      }
    } else {
      http_response_code(400); // Bad Request
      echo json_encode(array('error' => 'Missing parameter: id'));
    }
  } else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array('error' => 'Invalid request method'));
  }
?>