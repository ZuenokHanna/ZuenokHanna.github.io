<?php

$frm_name  = "Youname";
$recepient = "zuenok.hanna@mail.ru";
$sitename  = "";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$formname = trim($_POST["formname"]);

$message = "
Форма: $formname <br>
Имя: $name <br>
Телефон: $phone <br>
Email: $email
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
