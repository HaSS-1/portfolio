<?php


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$^message = $_POST['message'];

$mailheader = "Form:".$name."<".email.">"\r\n";

$recipient = "tajiri.hassan@gmail.com";

mail($recipient, $subject, $emailheader)

or die("Error! OUPSS Somthing went wrong...");

or die("Error!");

$echo"message sent";


?>