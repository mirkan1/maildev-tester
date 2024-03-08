const express = require('express')
const { createProxyMiddleware, proxyMiddleware } = require('http-proxy-middleware');
const MailDev = require('maildev')
const app = express()

// some business with the existing app

// Define a route for the base path
const maildev = new MailDev({
  basePathname: '/maildev'
})

// Maildev now running on localhost:1080/maildev
maildev.listen(function (err) {
  console.log('We can now sent emails to port 1025!')
    //send email to 1025 port
    maildev.send({
      from: 'test@tester.com',
        to: 'smtp.gmail.com',
        subject: 'Hello',
        text: 'Hello world!'
    }, function (err) {
        console.error(err)
    });
})

// proxy all maildev requests to the maildev app
const proxy = createProxyMiddleware('/maildev', {
  target: `http://localhost:1080`,
  ws: true,
})

// Maildev available at the specified route '/maildev'
app.use(proxy)