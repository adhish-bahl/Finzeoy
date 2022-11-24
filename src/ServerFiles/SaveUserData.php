<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

	$name = $_GET["name"];
	$emailId = $_GET["email"];
	$phno =  $_GET["phno"];
    $userType = $_GET["type"];
	$password =  $_GET["pwd"];

	$sql = "INSERT INTO user (name, emailid, Phno, usertype, pwd) values ('$name', '$emailId', $phno, '$userType', '$password')";
	$currentIdValue = "SELECT `AUTO_INCREMENT` FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'finzeoy' AND TABLE_NAME = 'user'";

	if($mysqli->query($sql) === TRUE)
	{
        $id = mysqli_insert_id($mysqli);
		echo json_encode(array("status" => "Success", "userId" => $id));
	}
    else
    {
        echo json_encode(array("status" => "Failed"));
    }

	$mysqli->close();
?>