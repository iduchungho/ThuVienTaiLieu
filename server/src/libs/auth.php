<?php
class auth
{
    public static function valid() {
        $param = isset($_GET['id']) ? $_GET['id'] : die();
        sess::start($param);
        $valid = Authorization::validation($param);
//        sess::shutdown();

        if (!$valid){
            echo json_encode([
                'message' => 'require user',
                'success' => false
            ]);
            return false;
        }
        return true;
    }

    public static function validAdmin(){
        $param = isset($_GET['id']) ? $_GET['id'] : die();
        sess::start($param);
        $valid = Authorization::validationAdmin($param);
//        sess::shutdown();

        if (!$valid){
            echo json_encode([
                'message' => 'require admin',
                'success' => false
            ]);
            return false;
        }
        return true;
    }
}