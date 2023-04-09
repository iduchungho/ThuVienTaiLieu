<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/menu.php';

$database = new Database();
$db = $database->connect();

$menu = new Menu($db);


$menu_id = isset($_GET['menu_id']) ? $_GET['menu_id'] : die();

$menu->menu_id = $menu_id;

if ($menu->getById()) {
    $menu_item = array(
        "menu_id" => $menu->menu_id,
        "menu_name" => $menu->menu_name,
        "price" => $menu->price,
        "img" => $menu->img
    );

    http_response_code(200);
    echo json_encode($menu_item);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Menu item not found."));
}
?>