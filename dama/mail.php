<?php

$recepient = "meduator33@gmail.com";
$sitename = "Название сайта";

$popup_title = trim($_POST["popup_title"]);
$popup_price = trim($_POST["popup_price"]);
$phone = trim($_POST["phone"]);
$message = "Title: $popup_title \nPrice: $popup_price \nPhone: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");