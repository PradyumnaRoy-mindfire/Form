<?php 
    $isEmpty = false;

    $fname = $_POST['fname'];
    $pass = $_POST['pass'] ;
    $phno = $_POST['phno'] ;
    $email = $_POST['email'] ;
    $pin = $_POST['pin'] ;
    $terms = isset($_POST['terms']) ? true : false;

    $fnameErr = "";
    $passErr = "";
    $phnoErr = "";
    $emailErr = "";
    $pinErr = "";
    $termsErr = "";

    if(empty($fname)){
        $fnameErr = "This field is required...";
        $isEmpty = true;
    }
    if(empty($pass)) {
        $passErr = "This field is required...";
        $isEmpty = true;
    }
    if(empty($phno)) {
        $phnoErr = "This field is required...";
        $isEmpty = true;
    }
    if(empty($email)) {
        $emailErr = "This field is required...";
        $isEmpty = true;
    }
    if(empty($pin)) {
        $pinErr = "This field is required...";
        $isEmpty = true;
    }
    if(empty($terms)) {
        $termsErr = "This field is required...";
        $isEmpty = true;
    }
    
?>