<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $arr = array();

    $sql = "SELECT * FROM budget where userid = " . $_GET["userId"];

    $result = $mysqli->query($sql); 
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $budget = new Budget();
            $budget->budgetId = $row["budgetid"];
            $budget->category = $row["category"];
            $budget->amount = $row["amount"];
            array_push($arr, $budget);
        }
    }

    echo json_encode($arr);

    class Budget
    {
        public $budgetId;
        public $category;
        public $amount;
    }
    
	$mysqli->close();
?>