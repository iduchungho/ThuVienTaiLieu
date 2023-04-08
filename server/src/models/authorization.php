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
                'nbf' => $expDate,
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
}