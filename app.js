const express = require('express')
const app = express()
const path = require('path')
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
