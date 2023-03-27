<?php
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: multipart/form-data');
        header('Access-Control-Allow-Methods: POST');
    
        include_once '../../config/database.php';
        include_once '../../models/menu.php';
    
        // init database
        $database = new Database();
        $db = $database->connect();
    
        $api = new Menu($db);
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            if (isset($data['menu_name'])  && isset($data['price'])) {
              $name = $data['menu_name'];
              $price = $data['price'];
              $menu = $api->create_menu($name, $price);
              if ($menu) {
                echo json_encode($menu);
              } else {
                http_response_code(500); // Internal Server Error
                echo json_encode(array('error' => 'Failed to create menu item'));
              }
            } else {
              http_response_code(400); // Bad Request
              echo json_encode(array('error' => 'Missing parameter(s): name,price'));
            }
        }

?>