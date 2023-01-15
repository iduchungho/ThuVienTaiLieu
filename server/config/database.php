<?php
    class Database {
        private $host = 'localhost';
        private $port = '8080';
        private $db_name = 'bkfoodcourt';
        private $username = 'root';
        private $password = '123456789';

        private $conn;

        public function connect() {
            $this->conn = null;

            try {
                $this->conn = new PDO(
                    'mysql:host=' .$this->host . ';dbname='.$this->db_name,
                    $this->username,
                    $this->password
                );

                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch (PDOException $e) {
                echo 'Error connecting to Database: '.$e->getMessage();
            }

            return $this->conn;
        }
    }