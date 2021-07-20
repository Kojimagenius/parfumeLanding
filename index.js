const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')

const port = 3000;
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public/'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.post('/sendEmail',(req, res) => {
  let emailFrom = req.body.email;
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth:{
      user: "maxdun25@gmail.com",
      pass: "***********"
    }
  })
  let mailDetails = {
    from: "maxdun25@gmail.com",
    to: emailFrom,
    subject: "Parfume details and other",
    text: "Testing"
  }
  transporter.sendMail(mailDetails, (err,data) => {
    if(err){
      console.log("smth went wrong")
      console.log(err.toString())
    }else{
      console.log("email sent sucssesfully!")
    }

   })
})
app.listen(port, () => {
  console.log(
    'app running at http://localhost:' + port
  )
})
