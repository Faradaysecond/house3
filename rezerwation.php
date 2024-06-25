<?php

$name = $_POST['name'];
$from = $_POST['mail'];
$subject = "Rezerwacja stolika";
$to = "ajchler.jakub@gmail.com";

$people = $_POST['people'];
$data = $_POST['data'];

$txt = "Imie: " . $name . "\r\n" .
        "Email: " . $from . "\r\n" .
        "Ilość osób: " . $people . "\r\n" .
        "kiedy: " . $data . "\r\n"; 


$headers = "From: " . $from . "\r\n" .
        "Name: " . $name . "\r\n" .
        "Reply-To: " . $from;

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status){
    header("Location: /index.html?mail_status=sent");
} else {
    header("Location:  /index.html?mail_status=error");
}