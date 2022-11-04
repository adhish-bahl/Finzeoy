<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $arr = array();

    $sql = "SELECT * FROM learning";

    $result = $mysqli->query($sql); 
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $module = new Module();
            $module->moduleId = $row["moduleid"];
            $module->title = $row["title"];
            $module->level = $row["level"];
            $module->content = $row["content"];
            array_push($arr, $module);
        }
    }

    echo json_encode($arr);

    class Module
    {
        public $moduleId;
        public $title;
        public $level;
        public $content;
    }
    
	$mysqli->close();
?>