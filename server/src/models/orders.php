<?php

class Orders
{
    private $conn;
    private $table = 'orders';
    public $order_id;
    public $customer_id;
    public $menu_id;
    public $quantity;
    public $order_status;
    public $time_stamp;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create() {
        $query = "INSERT INTO " . $this->table . " (customer_id, menu_id, quantity, order_status, time_stamp) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("iiiss" ,$this->customer_id, $this->menu_id, $this->quantity, $this->order_status, $this->time_stamp);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function getById() {
        $query = "SELECT * FROM " . $this->table . " WHERE order_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->order_id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result;
    }
    public function getAll() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result;
    }
    public function deleteById() {
        $query = "DELETE FROM " . $this->table . " WHERE order_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->order_id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function updateById() {
        $query = "UPDATE " . $this->table . " SET customer_id = ?, menu_id = ?, quantity = ?, order_status = ?, time_stamp = ? WHERE order_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("iiisss", $this->customer_id, $this->menu_id, $this->quantity, $this->order_status, $this->time_stamp, $this->order_id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function deleteAll() {
        $query = "DELETE FROM " . $this->table;
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function GetMaxID() {
        $query = "SELECT LAST_INSERT_ID()";
        return $this->conn->query($query);
    }

    public function GetByCustomerID($id){
        $query= "SELECT *
                FROM orders
                INNER JOIN menu
                ON orders.menu_id = menu.menu_id
                WHERE orders.customer_id = '$id';";
        return $this->conn->query($query);
    }
}