<?php
    class User {
        //
        private $conn;
        private $table = 'users';

        // user properties col
        public $username;
        public $password;
        public $id;
        public $email;
        public $avtUrl;
        public $role;

        public function getUsername() {
            // create query
            $query = 'SELECT * FROM $this->table';
            // prepare query
            $stmt = $this->conn->prepare($query);
            // execute query
            $stmt->execute();
            return $stmt;
        }
        public function getUsernamebyID($id) {

        }
        public function setUsernamebyID($username) {
            $this->username = $username;
        }
        public function getPassword() {
            return $this->password;
        }
        public function setPassword($password) {
            $this->password = $password;
        }
        public function getEmail() {
            return $this->email;
        }
        public function setEmail($email) {
            $this->email = $email;
        }
        public function getRole() {
            return $this->role;
        }
        public function setRole($role) {
            $this->role = $role;
        }
        public function getAvtUrl() {
            return $this->avtUrl;
        }
        public function setAvtUrl($avtUrl){
            $this->avtUrl = $avtUrl;
        }
    }