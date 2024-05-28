<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'rcabdw@gmail.com';
    $subject = 'New message from contact form';
    $body = "Name: $name\nEmail: $email\nMessage: \n$message";
    print("dsdsd\n");
    if (mail($to, $subject, $body)) {
        echo 'Thank you, ' . $name . '! Your message has been sent.';
    } else {
        echo 'Error sending email.';
    }
}
?>
