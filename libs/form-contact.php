<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';

require '../vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'auth.smtp.1and1.fr';                     // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'contact@haroon-dev.fr';                 // SMTP username
    $mail->Password = 'ZfgDoGq4';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                  // TCP port to connect to

    //Recipients
    $mail->setFrom(htmlspecialchars($_POST['email']), htmlspecialchars($_POST['username']), htmlspecialchars($_POST['lastname']));
    $mail->addAddress('contact@haroon-dev.fr', 'admin');     // Add a recipient


    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contact form my maquette cv';
    $mail->Body    = htmlspecialchars($_POST['message']);
    $mail->AltBody = htmlspecialchars($_POST["message"]);

    $mail->send();

} catch (Exception $e) {

}


header('Location: ../index.html');