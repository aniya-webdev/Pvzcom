<?php

$mail_to = "#"; 
$email_from = "#"; 
$name_from = "PVZCOM"; 
$subject = "Сообщение с сайта!"; 

$message =  "Вам пришло новое сообщение с сайта: <br><br>\n" .
    "<strong>Имя отправителя:</strong>" . strip_tags(trim($_POST['name'])) . "<br>\n" .
    "<strong>Телефон отправителя: </strong>" . strip_tags(trim($_POST['phone']));

// Формируем тему письма, специально обрабатывая её
$subject = "=?utf-8?B?" . base64_encode($subject) . "?=";

// Формируем заголовки письма
$headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    "From: " . "=?utf-8?B?" . base64_encode($name_from) . "?=" . "<" . $email_from . ">" .  PHP_EOL .
    "Reply-To: " . $email_from . PHP_EOL;

// Отправляем письмо
$mailResult = mail($mail_to, $subject, $message, $headers);

if ($mailResult) {
    // Перенаправляем на страницу "Спасибо"
    header('location: thankyou.html');
} else {
    header('location: error.html');
}