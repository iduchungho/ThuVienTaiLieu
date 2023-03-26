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
    public $city;
    public $avatar;
    public $role;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function setAttribute($ctm_id, $fn, $ln, $email, $pass, $pno, $city, $avt, $role){
        $this->customer_id = $ctm_id;
        $this->first_name = $fn;
        $this->last_name = $ln;
        $this->email_id = $email;
        $this->password = $pass;
        $this->phone_no = $pno;
        $this->city = $city;
        $this->avatar = $avt;
        $this->role = $role;
    }
    public function getCustomerId($id)
    {
        // create query
        $query = 'SELECT customer_id FROM '. $this->table . ' WHERE ' .$this->table. '.customer_id = '. $id ;
        // prepare query
        //$stmt = $this->conn->prepare($query);
        // execute query
        //$stmt->execute();
        //return $stmt;
        return $this->conn->query($query);

    }

    public function getAll()
    {
        $query = 'SELECT * FROM ' .$this->table;
        //$stmt = $this->conn->prepare($query);
        //$stmt->execute();
        //return $stmt;
        return $this->conn->query($query);
    }

    public function create(){

        $ctmid = $this->customer_id;
        $fn = htmlspecialchars(strip_tags($this->first_name));
        $ln = htmlspecialchars(strip_tags($this->last_name));
        $email = htmlspecialchars(strip_tags($this->email_id));
        $pass = htmlspecialchars(strip_tags($this->password));
        $pn = htmlspecialchars(strip_tags($this->phone_no));
        $ct = htmlspecialchars(strip_tags($this->city));
        $role = htmlspecialchars(strip_tags($this->role));
        $avt = htmlspecialchars(strip_tags($this->avatar));

        $query = 'INSERT INTO ' .$this->table
            .'( customer_id, first_name, last_name, email_id, password, phone_no, city, role, avatar)'
            .'VALUES '
            .'(' .$ctmid .',"' .$fn .'","' .$ln .'","' .$email
            .'","' .$pass .'","' .$pn .'","' .$ct .'","' .$role .'","' .$avt .'");';
        return $this->conn->query($query);
    }

    public function update(){

    }

    public function delete(){

    }

    public function uploadImage($file){

    }

}