<?php
    class Database {
        private $host = "localhost";
        private $db_name = "bkfood_cloud";
        private $username = "root";
        private $password = "";
        private $conn = null;

        public function connect() {
//            $this->conn = null;
//            try {
//                $this->conn = new PDO(
//                    "mysql:host=$this->host;dbname=$this->db_name",
//                    $this->username,
//                    $this->password
//                );
//
//                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//                // echo "connected to $this->db_name at $this->host successfully";
//            }
//            catch (PDOException $e) {
//                echo 'Error connecting to Database: '.$e->getMessage();
//            }
            $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
            if ($this->conn->connect_errno){
                echo "Failed to connect to MySQL: " .$this->conn->connect_error;
                exit();
            }
            return $this->conn;
        }
    }