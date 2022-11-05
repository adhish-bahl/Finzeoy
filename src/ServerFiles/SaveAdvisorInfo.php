<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

	$userid = $_GET["userid"];
	$sql = "INSERT INTO advisors (userid) values ($userid)";

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