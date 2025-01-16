<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Вказуємо адресу одержувача
    $to = "your_email@example.com";
    // Тема листа
    $subject = "Нове повідомлення з вашого сайту";
    // Тіло листа
    $body = "Ім'я: $name\nЕлектронна пошта: $email\n\nПовідомлення:\n$message";

    // Встановлюємо заголовки
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Відправляємо лист
    if (mail($to, $subject, $body, $headers)) {
        echo "Ваше повідомлення надіслано!";
    } else {
        echo "Сталася помилка при відправці повідомлення.";
    }
}
?>
