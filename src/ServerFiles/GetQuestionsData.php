<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $arr = array();

    $sql = "SELECT * FROM forum";

    $result = $mysqli->query($sql);
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $question = new Questions();
            $question->quesId = $row["quesid"];
            $question->ques = $row["ques"];
            $question->answer = $row["answer"];
            $question->quesBy = $row["Quesby"];
            $question->ansBy = $row["ansby"];
            array_push($arr, $question);
        }
    }

    echo json_encode($arr);

    class Questions
    {
        public $quesId;
        public $ques;
        public $answer;
        public $quesBy;
        public $ansBy;
    }
    
	$mysqli->close();
?>