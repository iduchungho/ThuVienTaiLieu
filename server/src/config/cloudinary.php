<?php

require __DIR__ . '/../vendor/autoload.php';

// Use the Configuration class 
use Cloudinary\Configuration\Configuration;

// Configure an instance of your Cloudinary cloud
// Configuration::instance('cloudinary://935594315273852:QwzZr3s2shCyDZQWKSCYo3wZnBw@dqsiqqz7q?secure=true');
    class Cloud {
        private $mykey = '935594315273852';
        private $mysecret = 'QwzZr3s2shCyDZQWKSCYo3wZnBw';
        private $myCloudName = 'dqsiqqz7q';
        private $mySecure = 'true';

        public function __construct() {
            Configuration::instance("cloudinary://$this->mykey:$this->mysecret@$this->myCloudName?secure=$this->mySecure");
            echo json_encode(
                array("message" => "cloudinary connected successfully")
            );
        }

        // service method
        public function updateImg(){
            
        }

    }