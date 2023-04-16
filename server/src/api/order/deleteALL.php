<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/orders.php';

include_once '../../libs/auth.php';
include_once '../../libs/sess.php';
include_once '../../libs/authorization.php';
if(!auth::valid()){
    return;
}


$database = new Database();
$db = $database->connect();
$orders = new Orders($db);


if ($orders->deleteAll()) {
    http_response_code(200);
    echo json_encode(array("message" => "All orders were deleted."));
} else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to delete orders."));
}
?>