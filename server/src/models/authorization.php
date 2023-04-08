<?php
require __DIR__ . '/../vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
class Authorization{
    private static $key = 'congchualunglinhlunglinhxinhlunglinh';

    public static function auth($id){
        try {
            $issueDate = time();
            $expDate = time() * 3600; // 1 hour
            $payload = [
                'iss' => 'http://localhost/bkfood-court',
                'aud' => 'http://localhost',
                'iat' => $issueDate,
                'exp' => $expDate,
                'user_id' => $id
            ];
            $jwtGeneratedToken = JWT::encode($payload, self::$key, 'HS256');
            return [
                'token' => $jwtGeneratedToken,
                'expires' => $expDate
            ];
        } catch (Exception $e){
            echo $e->getMessage();
            return false;
        }
    }

    public static function validation($id){
        $token = sess::readTokenFromSessionID($id);
        if($token){
            $decode = JWT::decode($token, new Key(self::$key, 'HS256'));
            if (isset($decode->exp) && isset($decode->user_id)){
                $exp = time();
                $time = $exp - $decode->exp;
                $id = $decode->user_id == $id;
                if (($time < 0) && $id){
                    return true;
                }
            }
        }
        return false;
    }
}