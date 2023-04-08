<?php
class Sess{
    public static function generateSession($id, $token){
        session_id($id);
        session_start();
        $_SESSION['user_token'] = $token;
    }

    public static function readTokenFromSessionID($id){
        session_id($id);
        session_start();
        return $_SESSION['user_token'];
    }

    public static function deleteTokenSessionID($id){
        session_id($id);
        session_start();
        session_destroy();
    }
}