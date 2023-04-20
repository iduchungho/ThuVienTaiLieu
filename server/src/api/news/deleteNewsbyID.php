<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include_once '../../config/database.php';
include_once '../../models/news.php';

$database = new Database();
$db = $database->connect();
$news = new News($db);
$data = json_decode(file_get_contents("php://input"));

// if (!empty($data->menu_id)) {
//     $menu->menu_id = $data->menu_id;
//     if ($menu->deleteById()) {
//         http_response_code(200);
//         echo json_encode(array("message" => "Menu item was deleted."));
//     } else{
//         http_response_code(503);
//         echo json_encode(array("message" => "Unable to delete menu item."));
//     }
// }else {
//     http_response_code(400);
//     echo json_encode(array("message" => "Data is incomplete. Provide an ID."));
// }
if (isset($_GET['id'])) {
    $news->id = $_GET['id'];

    if ($news->deleteById()) {
        http_response_code(200);
        echo json_encode(array("message" => "news item was deleted."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to delete news item."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to delete menu item. Data is incomplete."));
}

?>