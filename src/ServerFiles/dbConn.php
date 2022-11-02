<?php
    header('Access-Control-Allow-Origin: *');
    $mysqli = new mysqli("localhost", "root", "kavish1234", "ezzzmart");
	if($mysqli->connect_error) {
		exit('Could not connect');
	}
?>