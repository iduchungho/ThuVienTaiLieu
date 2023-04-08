<?php
class Sess{
    public static function start($id){
        session_id($id);
        session_start();
    }
    public static function shutdown(){
        if (session_status() == PHP_SESSION_ACTIVE){
            return session_destroy();
        }
        return 1;
    }
    public static function generateSession($id, $token){
        if (session_status() == PHP_SESSION_NONE){
            self::start($id);
        }
        $_SESSION['user_token'] = $token['token'];
        $_SESSION['user_exp'] = $token['expires'];
    }

    public static function readTokenFromSessionID($id){
        if (session_status() == PHP_SESSION_NONE){
            self::start($id);
        }
        if (session_status() == PHP_SESSION_ACTIVE){
            return isset($_SESSION['user_token']) ? $_SESSION['user_token'] : null;
        }
        return null;
    }
    public static function getSessionStatus($id){
        return session_status();
    }

//    public static function deleteTokenSessionID($id){
////        session_id($id);
//        /*
//         * PHP_SESSION_NONE : 1
//         * PHP_SESSION_ACTIVE : 2
//         * PHP_SESSION_DISABLED : 0
//         * */
//        if (session_status() == PHP_SESSION_ACTIVE){
//            return session_destroy();
//        }
//        return 0;
//    }
}