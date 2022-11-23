<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $arr = array();

    $sql = "SELECT * FROM investment where userid = " . $_GET["userId"];

    $result = $mysqli->query($sql); 
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $investment = new Investment();
            $investment->investId = $row["investid"];
            $investment->title = $row["title"];
            $investment->category = $row["category"];
            $investment->amt = $row["amount"];
            array_push($arr, $investment);
        }
    }

    echo json_encode($arr);

    class Investment
    {
        public $investId;
        public $title;
        public $category;
        public $amt;
    }
    
	$mysqli->close();
?>