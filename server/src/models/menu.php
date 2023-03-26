<?php

class Menu {
    private $conn;
    private $table = 'menu';
    public $menu_id ;
    public $menu_name;
    public $price;

    public function __construct($db)
    {
        $this->conn = $db;
    }

}