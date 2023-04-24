<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once '../../config/database.php';
include_once '../../models/payment.php';
include_once '../../libs/auth.php';
include_once '../../libs/sess.php';
include_once '../../libs/authorization.php';
if(!auth::valid()){
    return;
}
$database = new Database();
$db = $database->connect();
$payment = new Payment($db);

// $data = json_decode(file_get_contents("php://input"));

// if (!empty($data->id)) {
//     $payment->id = $data->id;
//     if ($payment->deleteById()) {
//         http_response_code(200);
//         echo json_encode(array("message" => "Payment was deleted."));
//     } else {
//         http_response_code(503);
//         echo json_encode(array("message" => "Unable to delete payment."));
//     }
// } else {
//     http_response_code(400);
//     echo json_encode(array("message" => "Unable to delete payment. Missing payment ID."));
// }

if (isset($_GET['pid'])) {
    $payment->id = $_GET['pid'];

    if ($payment->deleteById()) {
        http_response_code(200);
        echo json_encode(array("message" => "Payment item was deleted."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to delete Payment item."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to delete Payment item. Data is incomplete."));
}
?>