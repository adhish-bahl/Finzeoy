<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

    $userId = $_GET["userId"];
	$title = $_GET["title"];
	$goal =  $_GET["goal"];

	$sql = "INSERT INTO savings (userid, title, goal, amtsaved) values ($userId, '$title', $goal, 0)";

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