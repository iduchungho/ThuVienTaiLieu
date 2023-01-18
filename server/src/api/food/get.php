<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/database.php';
    include_once '../../models/food.php';

    // Instantiate DB $ connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate food object
    $food = new Food($db);

    // food query
    $resut = $food->get_foods();
    // get row count
    $num = $resut->rowCount();

    // check if food is already
    if($num > 0){
        $foods_arr = array();
        $foods_arr['data'] = array();

        while($row = $resut->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $foods_item = array(
                'title' => $title,
                'price' => $price,
                'description' => $description,
                'category' => $category,
                'rating' => $rating
            );
            // push to "data"
            array_push($foods_arr['data'], $foods_item);
        }
        // turn to JSON and output
        echo json_encode($foods_arr);
    }
    else {
        // no food
        echo json_encode(
            array('message' => 'no food found')
        );
    }
