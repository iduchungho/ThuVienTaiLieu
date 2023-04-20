<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once '../../config/database.php';
include_once '../../models/news.php';

$database = new Database();
$db = $database->connect();

$news = new News($db);

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id) && !empty($data->title) && !empty($data->content) && !empty($data->author) && !empty($data->created_at) && !empty($data->updated_at)) {
    $news->id = $data->id;
    $news->title = $data->title;
    $news->content = $data->content;
    $news->author = $data->author;
    $news->created_at = $data->created_at;
    $news->updated_at = $data->updated_at;

    if ($news->update()) {
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