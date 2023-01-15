<?php
    class Food {
        private $conn;
        private $table = 'food';

        // Food properties
        public $title;
        public $price;
        public $description;
        public $category;
        public $rating;

        // constructor with Database
        public function __construct($db){
            $this->conn = $db;
        }

        // service methods
        public function get_foods(){
            // create query
            $query = 'SELECT * from '.$this->table;

            // prepare query
            $stmt = $this->conn->prepare($query);

            // execute query
            $stmt->execute();

            return $stmt;
        }
    }