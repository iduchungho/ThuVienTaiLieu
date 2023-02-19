<?php

class Customer{
    private $conn;
    private $table = 'customer';
    // customer properties
    public $customer_id;
    public $first_name;
    public $last_name;
    public $email_id;
    public $password;
    public $phone_no;
    public $state;
    public $city;
    public $landmark;
    public $pincode;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    /**
     * @return mixed
     */
    public function getCustomerId($id)
    {
        // create query
        $query = 'SELECT customer_id FROM '. $this->table . ' WHERE ' .$this->table. '.customer_id = '. $id ;
        // prepare query
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        return $stmt;
    }

    public function getAllCustomer()
    {
        $query = 'SELECT * FROM ' .$this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}