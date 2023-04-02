<?php
class Restaurant{
    private $conn;

    private $table_name = 'restaurant';

    public $restaurant_id;
    public $password;
    public $first_name;
    public $last_name;
    public $designation;
    public function __construct($db) {
        $this->conn = $db;
    }
    
    public function getRestaurantById($restaurant_id) {
        $query = "SELECT * FROM " . $this->table_name . " WHERE restaurant_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $restaurant_id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_assoc();
    }
    public function create() {
        $query = "INSERT INTO " . $this->table_name . " (password, first_name, last_name, designation) VALUES (?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssss", $this->password, $this->first_name, $this->last_name, $this->designation);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
    public function readAll() {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result;
    }
    public function delete($restaurant_id) {
        $query = "DELETE FROM " . $this->table_name . " WHERE restaurant_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $restaurant_id);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
    public function update() {
        $query = "UPDATE " . $this->table_name . " SET password = ?, first_name = ?, last_name = ?, designation = ? WHERE restaurant_id = ?";
        $stmt = $this->conn->prepare($query);
    
        $stmt->bind_param("sssss", $this->password, $this->first_name, $this->last_name, $this->designation, $this->restaurant_id);
    
        if ($stmt->execute()) {
            return true;
        }
    
        return false;
    }
    public function deleteAll() {
        $query = "DELETE FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
    
        if ($stmt->execute()) {
            return true;
        }
    
        return false;
    }

    
 
    

}