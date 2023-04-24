<?php
class Payment {
    private $conn;
    private $table = 'payment';
    public $id;
    public $order_id;
    public $payment_type;
    public $payment_status;
    public $time_stamp;
    public function __construct($db) {
        $this->conn = $db;
    }
    public function create() {
        $query = "INSERT INTO " . $this->table . " (order_id, payment_type, payment_status, time_stamp) VALUES (?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("isss", $this->order_id, $this->payment_type, $this->payment_status, $this->time_stamp);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function getById() {
        $query = "SELECT id, order_id, payment_type, payment_status, time_stamp FROM " . $this->table . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_assoc();
    }
    public function getAll() {
        $query = "SELECT id, order_id, payment_type, payment_status, time_stamp FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result;
    }
    public function deleteById() {
        $query = "DELETE FROM " . $this->table . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function updateById() {
        $query = "UPDATE " . $this->table . " SET payment_type = ?, payment_status = ?, time_stamp = ? WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssis" , $this->payment_type, $this->payment_status, $this->time_stamp, $this->id);

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
}