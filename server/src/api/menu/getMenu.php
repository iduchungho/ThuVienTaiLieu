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
    $menu = $api->get();
    echo json_encode($menu);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array('error' => 'Invalid request method'));
}


?>