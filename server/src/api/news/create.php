<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/news.php';

// init database
$database = new Database();
$db = $database->connect();

$news = new News($db);
$data = json_decode(file_get_contents("php://input"));
if ( ! empty($data->title)&& !empty($data->content) && !empty($data->author) && !empty($data->created_at) && !empty($data->updated_at)){
  $news->title = $data->title;
  $news->content = $data->content;
  $news->author = $data->author;
  $news->created_at = $data->created_at;
  $news->updated_at = $data->updated_at;

  try {
      $news->create();
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
          "message" => "Unable to create news item.",
          "error" => $e->getMessage(),
          "success" => false
      ]);
      $db->close();
  }
//  if ($menu->create()) {
//    http_response_code(201);
//    echo json_encode(array("message" => "Menu item was created."));
//  } else {
//    http_response_code(503);
//    echo json_encode(array("message" => "Unable to create menu item."));
//  }

} else {
  http_response_code(400);
  echo json_encode(array("message" => "Data is incomplete. Provide , , and ."));
}

?>