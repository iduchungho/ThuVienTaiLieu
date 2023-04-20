<?php

class News
{
    private $conn;
    private $table = 'news';
    public $id;
    public $title;
    public $content;
    public $author;
    public $created_at;
    public $updated_at;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = "INSERT INTO ". $this->table . "(title,content,author,created_at,updated_at) VALUES (?,?,?,?,?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sssss", $this->title, $this->content, $this->author,$this->created_at,$this->updated_at);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function deleteById()
    {
        $query = "DELETE FROM news WHERE id = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bind_param("i", $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;

    }
    public function getALL(){
        $query = "SELECT id,title,content,author,created_at,updated_at FROM " . $this->table . " ORDER BY id";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result;
    }
    public function getById() {
        $query = "SELECT * FROM " . $this->table . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result;
    }
    public function deleteALL(){
        $query = "DELETE FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        if ($stmt->execute()) {
            return true;
        }
        return false;
        
    }
    public function update() {
        $query = "UPDATE " . $this->table . " SET title = ?, content = ?, author = ?, created_at = ?, updated_at = ? WHERE id = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bind_param("sssssi", $this->title,$this->content, $this->author, $this->created_at, $this->updated_at, $this->id);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

}