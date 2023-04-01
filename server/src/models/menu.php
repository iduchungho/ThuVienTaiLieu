<?php

class Menu
{
    private $conn;
    private $table = 'menu';
    public $menu_id;
    public $menu_name;
    public $price;
    public $img;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT INTO ". $this->table . "(menu_name,price,img) VALUES (?,?,?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sss", $this->menu_name, $this->price,$this->img);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function deleteById()
    {
        $query = "DELETE FROM menu WHERE menu_id = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bind_param("i", $this->menu_id);

        if ($stmt->execute()) {
            return true;
        }
        return false;

    }
    public function getALL(){
        $query = "SELECT menu_id,menu_name,price,img FROM " . $this->table . " ORDER BY menu_id";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result;
    }
    public function getById(){
        $query = "SELECT menu_id,menu_name,price,img FROM " . $this->table ." WHERE menu_id = ? LIMIT 0,1";
        $stmt = $this->conn->prepare($query);

        $stmt->bind_param("i", $this->menu_id);
        $stmt->execute();

        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();

            $this->menu_name = $row['title'];
            $this->price = $row['description'];
            $this->img = $row['img'];

            return true;
        }

        return false;
    }
    public function deleteALL(){
        $query = "DELETE FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        if ($stmt->execute()) {
            return true;
        }
        return false;
        
    }

}