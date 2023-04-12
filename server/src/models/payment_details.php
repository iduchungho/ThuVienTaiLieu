<?php

class payment_details
{
    private $conn;
    private $table = 'payment_details';
    public $payment_id;
    public $customer_id;
    public $card_number;
    public $card_holder_name;
    public $cvv;
    public $exp_month;
    public $exp_year;
    public $time_stamp;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create() {
        $query = "INSERT INTO " . $this->table . " (payment_id,customer_id,card_number,card_holder_name,cvv,exp_month,exp_year,time_stamp) VALUES (?,?, ?, ?, ?, ?, ? ,?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("iissiiis",$this->payment_id ,$this->customer_id, $this->card_number, $this->card_holder_name, $this->cvv, $this->exp_month,$this->exp_year,$this->time_stamp);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function getByPaymentId() {
        $query = "SELECT * FROM " . $this->table . " WHERE payment_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->payment_id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_assoc();
    }
    public function getAll() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result;
    }
    public function updateByPaymentId() {
        $query = "UPDATE " . $this->table . " SET customer_id = ?, card_number = ?, card_holder_name = ?, cvv = ?, exp_month = ?, exp_year = ?, time_stamp = ? WHERE payment_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("isssiiis", $this->customer_id, $this->card_number, $this->card_holder_name, $this->cvv, $this->exp_month, $this->exp_year, $this->time_stamp, $this->payment_id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function deleteById() {
        $query = "DELETE FROM " . $this->table . " WHERE payment_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->payment_id);
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