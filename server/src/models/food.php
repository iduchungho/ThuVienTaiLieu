<?php
    class Food {
        private $conn;
        private $table = 'food';

        // Food properties
        public $title;
        public $price;
        public $name;
        public $description;
        public $category;
        public $rating;

        // constructor with Database
        public function __construct($db){
            $this->conn = $db;
        }

        // service methods
        public function getAll(){
            // create query
            $query = 'SELECT * from '.$this->table;

            // prepare query
            $stmt = $this->conn->prepare($query);

            // execute query
            $stmt->execute();

            return $stmt;
        }
        public function get($id){
            $id = $this->mysqli->real_escape_string($id);
            $query = "SELECT * FROM food WHERE id = $id";
            $result = $this->mysqli->query($query);
            if ($result->num_rows === 0) {
                return null;
            }
            $row = $result->fetch_assoc();
            $this->id = $row['id'];
            $this->name = $row['name'];
            $this->description = $row['description'];
            $this->price = $row['price'];
            return $this;
        }

    }