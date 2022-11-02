<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $sql = "SELECT * FROM advisors where userid = " . $_GET['userId'];

    $result = $mysqli->query($sql);
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $advisor = new Advisors();
            $advisor->userId = $row["userid"];
            $advisor->age = $row["age"];
            $advisor->profession = $row["profession"];
            $advisor->desc = $row["desc"];
            $advisor->linkedin = $row["linkedin"];
            $advisor->twitter = $row["twitter"];
            $advisor->facebook = $row["facebook"];
            $advisor->website = $row["website"];
            echo json_encode($advisor);
        }
    }

    else {
        echo "0 results";
    }

    class Advisors
    {
        public $userId;
        public $age;
        public $profession;
        public $desc;
        public $linkedin;
        public $twitter;
        public $facebook;
        public $website;
    }
    
	$mysqli->close();
?>