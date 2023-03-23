<?php

class Orders
{
    private $conn;
    private $table = 'orders';
    public $order_id;
    public $customer_id;
    public $menu_id;
    public $quantity;
    public $order_status;
    public $time_stamp;

    public function __construct($db)
    {
        $this->conn = $db;
    }
}