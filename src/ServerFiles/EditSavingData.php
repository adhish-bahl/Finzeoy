<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

    $userId = $_GET["userId"];
	$title = $_GET["title"];
	$amount =  $_GET["amount"];

	$sql = "UPDATE savings set amtsaved = $amount where userid = $userId and title = '$title'";

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