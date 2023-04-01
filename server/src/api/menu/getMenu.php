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
// if ($_SERVER['REQUEST_METHOD'] == 'GET') {
//     $menu = $api->get();
//     echo json_encode($menu);
// } else {
//     http_response_code(405); // Method Not Allowed
//     echo json_encode(array('error' => 'Invalid request method'));
// }
$result = $menu->getAll();
$num = $result->num_rows;
if ($num > 0) {
    $menu_items = array();
    $menu_items["records"] = array();

    while ($row = $result->fetch_assoc()) {
        extract($row);

        $menu_item = array(
            "menu_id" => $menu_id,
            "menu_name" => $menu_name,
            "price" => $price,
            "img" => $img
        );

        array_push($menu_items["records"], $menu_item);
    }

    http_response_code(200);
    echo json_encode($menu_items);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No menu items found."));
}

?>