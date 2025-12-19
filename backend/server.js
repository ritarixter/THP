require("dotenv").config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');

// Инициализация Express приложения
const app = express();

// Настройка CORS для разрешения запросов с клиентского приложения
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);
app.use(express.json({ limit: '1mb' })); // Увиличение лимита для JSON
app.use(express.urlencoded({ extended: true, limit: '1mb' })); // Увеличение лимита для URL-encoded данных

// Middleware для базовой аутентификации
const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    res.setHeader("WWW-Authenticate", "Basic");
    return res.status(401).json({ message: "Authorization required" });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");

  if (
    username !== process.env.BASIC_AUTH_USER ||
    password !== process.env.BASIC_AUTH_PASS
  ) {
    return res.status(403).json({ message: "Invalid credentials" });
  }

  next();
};

// Настройка nodemailer для отправки писем через SMTP 
const transporter = nodemailer.createTransport({
  host: 'mail.superttx.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

// Функция для отправки письма без вложений 
const sendTextMessage = (textForSend, subText, res) => {
  let mailOptions = {                                                                                                       // СООБЩЕНИЕ БЕЗ ФАЙЛА
    from: process.env.FROM,
      to: process.env.TO,
    subject: subText,
    text: textForSend
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });
}

// ФОРМИРОВАНИЕ ТЕКСТА СООБЩЕНИЯ 
const buildText = (headersFromUI, arrayForSend) => {                                                                        // ФОРМИРОВАНИЯ СООБЩЕНИЯ
  let textForSend = '';
  headersFromUI.forEach((text, index) => {          
    textForSend += `${arrayForSend[index]} : ${text}\n`;
});
return textForSend;
}

// ОБРАБОТКА МАРШРУТА Без ФАЙЛОВ
app.post('/send-email', basicAuth, (req, res) => {
  const { body } = req;                                                                                                     // ЭТИ ТРИ СТРОКИ ДЛЯ ФОРМИРОВАНИЯ ТЕЛО СООБЩЕНИЯ
  const headersFromUI = [ body.name, body.email, body.phone, body.message];
  const arrayForSend = ['Name', 'Email', 'Phone', 'Message']

  let textForSend = buildText(headersFromUI, arrayForSend);

  sendTextMessage(textForSend, `New message from ${body.name}`, res); 
});


// ЗАПУСК СЕРВЕРА 
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});