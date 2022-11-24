<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

    $userId = $_GET["userId"];
	$category = $_GET["category"];
	$amount = $_GET["amount"];

	$sql = "INSERT INTO budget (userid, category, amount) values ($userId, '$category', $amount)";

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