<?php

if($_POST["submit"]) {
    $recipient="carolynjmcneal@icloud.com";
    $fname=$_POST["fname"];
    $lname=$_POST["lname"];
    $senderEmail=$_POST["email"];
    $subject=$_POST["subject"];
    $message=$_POST["message"];

    $mailBody="Name: $fname + $lname\nEmail: $senderEmail\nSubject: $subject\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>