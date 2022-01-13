<?php

    if(isset($_POST['name']) && $_POST['email'] != ''){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){

   
                 //submit form

            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $messageSubject = $_POST['subject'];
            $message = $_POST['message'];

            $to = "tajiri.hassan@gmail.com";
            $body = "";

            $body .= "Form:".$Nuserame. "\r\n";
            $body = "Email:".$userEmail. "\r\n";
            $body = "Message:".$Nuserame. "\r\n";

<<<<<<< HEAD
            mail( $to,$messageSubject,$body);
=======
or die("Error!");

$echo"message sent";
>>>>>>> 17cca83e85d8c5c04d0699eeebefc5d3b0ea61b6

            $message_sent = true;


            or die("Error! OUPSS Somthing went wrong...");

            $echo"message sent";

        }
            else{
            $message_sent = false;
    }

}
?>