<?php
    include "dbConn.php";
	header('Access-Control-Allow-Origin: *');

	$ques = $_GET["question"];
    $quesBy = $_GET["quesBy"];
    $answer = $_GET["answer"];
    $id = $_GET["userId"];
    $quesId = $_GET["quesId"];

    $sql = "";
    
    if($_GET["operation"] == "alter")
    {
        $sql = "UPDATE forum SET answer = '$answer', ansBy = $id WHERE quesid = $quesId";
    }
    else
    {
	    $sql = "INSERT INTO forum (ques, QuesBy) values ('$ques', $quesBy)";
    }

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