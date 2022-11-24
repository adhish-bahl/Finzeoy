<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

	$ansBy = $_GET["ansBy"];
    $answer = $_GET["ans"];
    $quesId = $_GET["quesId"];
	$sql = "UPDATE forum set answer='$answer', ansby = $ansBy where quesid=$quesId";

	if($mysqli->query($sql) === TRUE)
	{
		echo json_encode(array("status" => "success"));
	}
	else
	{
		echo json_decode(array("status" => "failed"));
	} 

	$mysqli->close();
?>