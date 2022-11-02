<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

	$userid = $_GET["userid"];
	$age = $_GET["age"];
	$profession =  $_GET["profession"];
    $desc = $_GET["desc"];
	$linkedin =  $_GET["linkedin"];
    $twitter =  $_GET["twitter"];
    $facebook =  $_GET["facebook"];
    $website =  $_GET["website"];

	$sql = "INSERT INTO advisors values ($userid, $age, '$profession', '$desc', '$linkedin','$twitter','$facebook','$website')";

	if($mysqli->query($sql) === TRUE)
	{
		echo "Success";
	}
    else
    {
        echo "Failed";
    }

	$mysqli->close();
?>