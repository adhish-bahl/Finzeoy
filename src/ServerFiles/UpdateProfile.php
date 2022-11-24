<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

	$userid = $_GET["userid"];
    $age = $_GET["age"];
    $profession = $_GET["profession"];
    $desc = $_GET["desc"];
    $linkedin = $_GET["linkedin"];
    $twitter = $_GET["twitter"];
    $facebook = $_GET["facebook"];
    $website = $_GET["website"];
    
    $sql = "UPDATE advisors set age=$age, profession='$profession', description='$desc', linkedin='$linkedin', twitter='$twitter', facebook='$facebook', website='$website' where userid=$userid";

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