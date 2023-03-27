<?php

class Menu {
    private $conn;
    private $table = 'menu';
    public $menu_id ;
    public $menu_name;
    public $price;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function getMenuId() {
        return $this->menu_id;
      }
    public function get() {
        $result = $this->conn->query("SELECT * FROM menu");
        $menu = array();
        while ($row = $result->fetch_assoc()) {
            $menu[] = $row;
          }
          return $menu;
    }
    public function get_menu_by_id($id) {
        $id = $this->conn->real_escape_string($id);
        $result = $this->conn->query("SELECT * FROM menu WHERE menu_id='$id'");
        $menu = $result->fetch_assoc();
        return $menu;
      }
    public function create_menu($name,$price) {
        $menu_name = $this->conn->real_escape_string($name);
        $price = $this->conn->real_escape_string($price);
        $result = $this->conn->query("INSERT INTO menu (menu_name, price) VALUES ('$menu_name', '$price')");
        if ($result) {
          $id = $this->conn->insert_id;
          $menu = $this->get_menu_by_id($id);
          return $menu;
        } else {
          return false;
        }
      }
      function delete_menu($id) {
        // Prepare the DELETE statement
        $stmt = $this->conn->prepare("DELETE FROM menu WHERE menu_id = ?");
        $stmt->bind_param("i", $id);
    
        // Execute the statement and check for errors
        if (!$stmt->execute()) {
          http_response_code(500); // Internal Server Error
          echo json_encode(array("error" => "Failed to delete menu item."));
          exit;
        }
    
        // Check if a row was affected
        if ($stmt->affected_rows == 0) {
          http_response_code(404); // Not Found
          echo json_encode(array("error" => "Menu item not found."));
          exit;
        }
    
        // Return success message
        http_response_code(200); // OK
        echo json_encode(array("message" => "Menu item deleted successfully."));
      }

}