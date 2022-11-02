<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

	$title = $_GET["title"];
	$postedBy = $_GET["postedBy"];
	$date =  $_GET["date"];
    $article = $_GET["article"];
	$type =  $_GET["type"];

	$sql = "INSERT INTO articles (title, postedby, date, article, type) values ('$title', $postedBy, '$date', '$article', '$type')";

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