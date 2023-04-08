<?php

class Customer {
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

        $hash = password_hash($pass, PASSWORD_BCRYPT);
        $this->password = $hash;

        $alluser = "SELECT * FROM $this->table";
        $count = mysqli_num_rows($this->conn->query($alluser));
        $ctmid = $count + 1;

        $query = 'INSERT INTO ' .$this->table
            .'( customer_id, first_name, last_name, email_id, password, phone_no, city, role, avatar)'
            .'VALUES '
            .'(' .$ctmid .',"' .$fn .'","' .$ln .'","' .$email
            .'","' .$hash .'","' .$pn .'","' .$ct .'","' .$role .'","' .$avt .'");';
        return $this->conn->query($query);
    }

    public function getCustomerByID($id){
        $query = 'SELECT * FROM ' .$this->table .' WHERE customer_id=' .$id;
        return $this->conn->query($query);
    }

    public function update(){
        $query =
            'UPDATE ' .$this->table
            .' SET first_name=\''     .$this->first_name .'\','
                .'last_name=\''      .$this->last_name .'\','
                .'email_id=\''       .$this->email_id .'\','
                .'password=\''       .$this->password .'\','
                .'phone_no=\''       .$this->phone_no .'\','
                .'city=\''           .$this->city .'\','
                .'role=\''           .$this->role .'\','
                .'avatar=\''         .$this->avatar .'\''
            .' WHERE customer_id='  .$this->customer_id .';';
//        echo $query;
        return $this->conn->query($query);
    }

    public function delete($id){
        $query = 'DELETE FROM ' .$this->table .' WHERE id=' .$id .';';
        return $this->conn->query($query);

    }

    public function uploadImage($url){
        $query =
            'UPDATE ' .$this->table
            .' SET avatar=\''   .$url .'\''
            .' WHERE customer_id='  .$this->customer_id .';';
        return $this->conn->query($query);
    }

    public function login($email, $password){
        $query = "SELECT * FROM $this->table WHERE email_id='$email'";
        $stmt = $this->conn->query($query);
        if (mysqli_num_rows($stmt) == 0) {
            return -1;
        }
        $stored_hash = mysqli_fetch_assoc($stmt);
        if (password_verify($password, $stored_hash['password'])) {
            return $stored_hash['customer_id'];
        }
        return -1;
    }

    public function logout(){
        return false;
    }

}