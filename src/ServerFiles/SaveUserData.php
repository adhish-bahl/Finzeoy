<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

	$name = $_GET["name"];
	$emailId = $_GET["email"];
	$phno =  $_GET["phno"];
    $userType = $_GET["type"];
	$password =  $_GET["pwd"];

	$sql = "INSERT INTO user (name, emailid, Phno, usertype, pwd) values ('$name', '$emailId', $phno, '$userType', '$password')";

	if($mysqli->query($sql) === TRUE)
	{
		echo json_encode(array("status" => "Success"));
	}
    else
    {
        echo json_encode(array("status" => "Failed"));
    }

	$mysqli->close();
?>