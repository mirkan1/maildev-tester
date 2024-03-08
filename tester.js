const MailDev = require('maildev')

const maildev = new MailDev({
  outgoingHost: 'smtp.gmail.com',
  outgoingUser: 'test@gmail.com',
  outgoingPass: '********'
})

maildev.listen()

// Print new emails to the console as they come in
maildev.on('new', function (email) {
  if (email.to.address === 'johnny.utah@fbi.gov') {
    maildev.relayMail(email, function (err) {
      if (err) return console.log(err)
      console.log('Email has been relayed!')
    })
  }
})