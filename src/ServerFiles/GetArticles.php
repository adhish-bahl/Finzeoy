<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $arr = array();

    $sql = "SELECT * FROM articles";

    $result = $mysqli->query($sql); 
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $article = new Article();
            $article->articleid = $row["articleid"];
            $article->title = $row["title"];
            $article->postedby = $row["postedby"];
            $article->date = $row["date"];
            $article->article = $row["article"];
            $article->type = $row["type"];
            array_push($arr, $article);
        }
    }

    echo json_encode($arr);

    class Article
    {
        public $articleid;
        public $title;
        public $postedby;
        public $date;
        public $article;
        public $type;
    }
    
	$mysqli->close();
?>