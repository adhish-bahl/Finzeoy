<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $arr = array();

    $sql = "SELECT * FROM expense where userid = " . $_GET["userId"];

    $result = $mysqli->query($sql); 
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $expense = new Expense();
            $expense->transactionId = $row["expenseid"];
            $expense->title = $row["title"];
            $expense->category = $row["category"];
            $expense->amount = $row["amount"];
            $expense->date = $row["date"];
            array_push($arr, $expense);
        }
    }

    echo json_encode($arr);

    class Expense
    {
        public $transactionId;
        public $title;
        public $category;
        public $amount;
        public $date;
    }
    
	$mysqli->close();
?>