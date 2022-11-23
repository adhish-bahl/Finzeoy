<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $arr = array();

    $sql = "SELECT * FROM savings where userid = " . $_GET["userId"];

    $result = $mysqli->query($sql); 
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $saving = new Saving();
            $saving->savingId = $row["savingid"];
            $saving->title = $row["title"];
            $saving->goal = $row["goal"];
            $saving->amtSaved = $row["amtsaved"];
            array_push($arr, $saving);
        }
    }

    echo json_encode($arr);

    class Saving
    {
        public $savingId;
        public $title;
        public $goal;
        public $amtSaved;
    }
    
	$mysqli->close();
?>