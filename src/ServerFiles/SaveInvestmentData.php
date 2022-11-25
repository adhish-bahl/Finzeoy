<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

    $userId = $_GET["userId"];
	$title = $_GET["title"];
	$category = $_GET["category"];
	$amount =  $_GET["amount"];
    $date = $_GET["date"];

	$sql = "INSERT INTO investment (userid, title, category, amount, date) values ($userId, '$title', '$category', $amount, '$date')";

	if($mysqli->query($sql) === TRUE)
	{
		echo json_encode(array("status" => "success"));
	}
    else
    {
        echo json_encode(array("status" => "failed"));
    } 

	$mysqli->close();