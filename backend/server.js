require("dotenv").config();

const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Инициализация Express приложения
const app = express();

// Настройка CORS для разрешения запросов с клиентского приложения
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);
app.use(express.json({ limit: '50mb' })); // Увиличение лимита для JSON
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // Увеличение лимита для URL-encoded данных

// Настройка multer для обработки файлов
const upload = multer({ dest: 'uploads/',   // Папка для временного хранения файлов
    limits: { fileSize: 50 * 1024 * 1024 } // Лимит 50 MB на файл 
});

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


// Функция для отправки письма с вложениями 
const sendMessage = (textForSend, attachments, subText, res) => {
  let mailOptions = {                                                                                                       // НАСТРОЙКА ДЛЯ ОТПРАВКИ (НУЖНО ВЫВЕСТИ В ОТДЕЛЬНУЮ ФУНКЦИЮ, НО ... ЛЕЕЕНЬЬЬЬЬЬ)
    from: process.env.FROM,
      to: process.env.TO,  //   jasulankaribaev98@gmail.com
    subject: 'THP ' + subText,
    text: textForSend,
    attachments: attachments
  };
  // ОТПРАВКА ПИСЬМА
  transporter.sendMail(mailOptions, (error, info) => {                                                                      // ОТПРАВКА
    if (error) {
      console.error('Error sending email:', error);
      // НЕУДАЧНЫЙ ОТВЕТ
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }

    console.log('Email sent:', info.response);

    attachments.forEach(attachment => {                                                                                     // ВЫГРУЗКА ФАЙЛОВ
      fs.unlink(attachment.path, err => {
        if (err) console.error('Error deleting file:', err);
      });
    });
    // УСПЕШНЫЙ ОТВЕТ
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });

}
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

// ФУНКЦИИ ФОРМИРОВАНИЯ СООБЩЕНИЯ И КОНТЕЙНЕРА ДЛЯ ФАЙЛОВ 
const buildAttachments = (documentFields, documentDescriptions, files) => {                                                 // ЗАПОЛНЕНИЕ КОНТЕЙНЕРА + УНИКАЛЬНЫЕ НАЗВАНИЯ ФАЙЛОВ (ЭТО ОБЯЗАТЕЛЬНО!!!)
  const attachments = [];
  documentFields.forEach((field, index) => {                               
    if (files[field] && files[field].length > 0) {
      attachments.push({
        filename: `${documentDescriptions[index]}_${files[field][0].originalname}`,
        path: files[field][0].path,
      });
    }
  });
  return attachments;
}

// ФОРМИРОВАНИЕ ТЕКСТА СООБЩЕНИЯ 
const buildText = (headersFromUI, arrayForSend) => {                                                                        // ФОРМИРОВАНИЯ СООБЩЕНИЯ
  let textForSend = '';
  headersFromUI.forEach((text, index) => {          
    textForSend += `${arrayForSend[index]} : ${text}\n`;
});
return textForSend;
}

// ГЛАВНАЯ ФУНКЦИЯ ОБРАБОТКИ ЗАПРОСА 
const globalCreator = (privateFields, privateDescriptions, files, headersFromUI, arrayForSend, msgName, res) => {
  const attachments = buildAttachments(privateFields, privateDescriptions, files);                                          // КОНТЕЙНЕР ДЛЯ ФАЙЛОВ
  let textForSend = buildText(headersFromUI, arrayForSend);
  console.log(textForSend);

  sendMessage(textForSend, attachments, msgName, res);
}

// ОБРАБОТКА МАРШРУТА Без ФАЙЛОВ
app.post('/send-email', (req, res) => {
  const { body } = req;                                                                                                     // ЭТИ ТРИ СТРОКИ ДЛЯ ФОРМИРОВАНИЯ ТЕЛО СООБЩЕНИЯ
  const headersFromUI = [ body.name, body.email, body.companyName, body.currency, body.message];
  const arrayForSend = ['Name', 'Email', 'Company Name', 'Currency', 'Message']

  let textForSend = buildText(headersFromUI, arrayForSend);

  sendTextMessage(textForSend, `New message from ${body.name}`, res); 
});


// ЗАПУСК СЕРВЕРА 
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});