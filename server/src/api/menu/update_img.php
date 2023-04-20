<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: multipart/form-data');
header('Access-Control-Allow-Methods: POST');
include_once '../../models/menu.php';
include_once '../../config/database.php';
include_once '../../config/cloudinary.php';

$cloud = new Cloud();
$database = new Database();
$db = $database->connect();
$menu = new Menu($db);
$file = isset($_FILES['img']) ? $_FILES['img']['tmp_name'] : die();
$param = isset($_GET['menu_id']) ? $_GET['menu_id'] : die();
$menu->menu_id = $param;
$secure_url = "";
try {
    $secure_url = $cloud->uploadImage($file);
} catch (\Cloudinary\Api\Exception\ApiError $e) {
    echo json_encode(
        array(
            "error" => $e
        )
    );
}
try {
    $menu->uploadImage($secure_url);
    echo json_encode([
        "message" => "menu img was created.",
        "success" => true
    ]);
    $db->close();
} catch (Exception $e) {
    echo json_encode([
        "message" => "Unable to create menu img.",
        "error" => $e->getMessage(),
        "success" => false
    ]);
    $db->close();
}




?>