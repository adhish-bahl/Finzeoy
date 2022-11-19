<?php
    header('Access-Control-Allow-Origin: *');
    $mysqli = new mysqli("finzeoyaws.cbcitdflipgg.ap-south-1.rds.amazonaws.com", "admin", "Finaws69", "finzeoy");
	if($mysqli->connect_error) {
		exit('Could not connect');
	}
?>