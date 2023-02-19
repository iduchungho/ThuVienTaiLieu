<?php
    class Database {
        private $host = "localhost:3306";
        private $db_name = "bkfood_cloud";
        private $username = "root";
        private $password = "";

        private $conn;

        public function connect() {
            $this->conn = null;

            try {
                $this->conn = new PDO(
                    "mysql:host=$this->host;dbname=$this->db_name",
                    $this->username,
                    $this->password
                );

                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                // echo "connected to $this->db_name at $this->host successfully";
            }
            catch (PDOException $e) {
                echo 'Error connecting to Database: '.$e->getMessage();
            }

            return $this->conn;
        }
    }