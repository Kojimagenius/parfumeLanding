const express = require('express')
const path = require('path')
const port = 3000;
const app = express()

app.use(express.static(__dirname + '/public/'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(port, () => {
  console.log(
    'app running at http://localhost:' + port
  )
})