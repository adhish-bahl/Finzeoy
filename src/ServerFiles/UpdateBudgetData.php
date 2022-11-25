<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

    $userId = $_GET["userId"];
	$budgetid = $_GET["budgetid"];
	$amount =  $_GET["amount"];

	$sql = "UPDATE budget set amount = $amount where userid = $userId and budgetid = $budgetid";

	if($mysqli->query($sql) === TRUE)
	{
		echo json_encode(array("status" => "success"));
	}
    else
    {
        echo json_encode(array("status" => "failed"));
    } 

	$mysqli->close();
?>