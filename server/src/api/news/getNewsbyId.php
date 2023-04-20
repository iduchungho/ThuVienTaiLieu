<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/news.php';

if (!isset($_GET['id'])) {
    http_response_code(400);
    echo json_encode(array("message" => "id is required."));
    exit();
}

$id = intval($_GET['id']);

$database = new Database();
$db = $database->connect();
$news = new News($db);
$news->id = $id;

$result = $news->getById();
$num = $result->num_rows;

if ($num > 0) {
    $news_data = $result->fetch_assoc();

    http_response_code(200);
    echo json_encode($news_data);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "news not found."));
}
?>