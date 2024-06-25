<?php

$name = $_POST['name'];
$from = $_POST['mail'];
$subject = "Zgłoszenie franczyzobiorcy";
$to = "office@hosue-falafel-and-hummus.com";

$number = $_POST['phone'];
$flour = $_POST['flor'];

$txt = "Imie: " . $name . "\r\n" .
        "Email: " . $from . "\r\n" .
        "Telefon: " . $number . "\r\n" .
        "lokal: " . $flor . "\r\n"; 


$headers = "From: " . $from . "\r\n" .
        "Name: " . $name . "\r\n" .
        "Reply-To: " . $from;

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status){
    header("Location: /business.html?mail_status=sent");
} else {
    header("Location:  /business.html?mail_status=error");
}