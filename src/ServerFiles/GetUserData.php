<?php
    include "dbConn.php";
    header('Access-Control-Allow-Origin: *');

    $sql = "SELECT * FROM user where userid = " . $_GET['userId'];

    $result = $mysqli->query($sql);
    if($result->num_rows>0) {
        while($row = $result->fetch_assoc()) {
            $user = new Users();
            $user->userId = $row["userid"];
            $user->name = $row["name"];
            $user->email = $row["emailid"];
            $user->phno = $row["Phno"];
            $user->userType = $row["usertype"];
            $user->password = $row["pwd"];
            echo json_encode($user);
        }
    }

    else {
        echo "0 results";
    }

    class Users
    {
        public $userId;
        public $name;
        public $email;
        public $phno;
        public $userType;
        public $password;
    }
    
	$mysqli->close();
?>