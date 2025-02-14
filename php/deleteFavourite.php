<?php 
session_start();
        $jsonFile = $_SERVER['DOCUMENT_ROOT'] . '/test/Form/data.json';

        if (file_exists($jsonFile) && file_get_contents($jsonFile)) {
            $jsonData = file_get_contents($jsonFile);
            $data = json_decode($jsonData, true);
        } else {
            $data = [];
        
        }
        //For deleteing the favourite data
        if (isset($_GET['action']) && $_GET['action'] == 'delete') {
            echo "delete request is coming"; 
            $rowId = (int)$_GET['id']; 
            //key is index and user is the whole data correspoding the index in data.json
            $userId = $_SESSION['id'];
                if (isset($data[$userId])) {
                    if (isset($data[$userId]['favourite'][$rowId])) {

                   // echo "row", $rowId ; exit();
                        // Removing the favourite item from the user's array
                        unset($data[$userId]['favourite'][$rowId]);
                        // reindexing the array to fix any gap
                       // $data[$userId]['favourite'] = array_values($data[$userId]['favourite']);
                    }
                }
    
            file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));
        }
 ?>