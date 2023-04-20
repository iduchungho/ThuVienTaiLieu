<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/news.php';

$database = new Database();
$db = $database->connect();
$News = new news($db);
// if ($_SERVER['REQUEST_METHOD'] == 'GET') {
//     $news = $api->get();
//     echo json_encode($news);
// } else {
//     http_response_code(405); // Method Not Allowed
//     echo json_encode(array('error' => 'Invalid request method'));
// }
$result = $News->getAll();
$num = $result->num_rows;
if ($num > 0) {
    $news_items = array();
    $news_items["records"] = array();

    while ($row = $result->fetch_assoc()) {
        extract($row);

        $news_item = array(
            "id" => $id,
            "title" => $title,
            "content" => $content,
            "author" => $author,
            "created_at" => $created_at,
            "updated_at" => $updated_at
        );

        array_push($news_items["records"], $news_item);
    }

    http_response_code(200);
    echo json_encode($news_items);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No news items found."));
}

?>