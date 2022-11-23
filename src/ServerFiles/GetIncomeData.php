<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $arr = array();

    $sql = "SELECT * FROM income where userid = " . $_GET["userId"];

    $result = $mysqli->query($sql); 
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $income = new Income();
            $income->transactionId = $row["incomeid"];
            $income->title = $row["title"];
            $income->category = $row["category"];
            $income->amount = $row["amount"];
            $income->date = $row["date"];
            array_push($arr, $income);
        }
    }

    echo json_encode($arr);

    class Income
    {
        public $transactionId;
        public $title;
        public $category;
        public $amount;
        public $date;
    }
    
	$mysqli->close();
?>