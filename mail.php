<?php
$sendto   = "asadullin.art@gmail.com, dgkucheruk1985@gmail.com"; //Просто замените на ваш почтовый ящик
$admin = "info@info.ru"; //Этот ящик может быль любым, даже несуществующим, он нужен чтобы письма не кидало в спам
if (isset($_POST['name'])) {
	$username = $_POST['name'];
	}
if (isset($_POST['phone'])) {
	$userphone = $_POST['phone'];
	}
// Формирование заголовка письма
$subject  = "Новая заявка с сайта";
$headers  = "From: " . strip_tags($admin) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка</h2>\r\n";
if (!empty($username)) {
    $msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
}
if (!empty($userphone)) {
$msg .= "<p><strong>Контактный телефон:</strong> ".$userphone."</p>\r\n";
}
$msg .= "</body></html>";
if(@mail($sendto, $subject, $msg, $headers)) {
    echo "<center>Спасибо за отправку Вашей заявки!</center>";
} else {
	 echo "<center><b>Ошибка. Сообщение не отправлено!</b></center>";
}
   
?>


