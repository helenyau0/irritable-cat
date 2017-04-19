const express = require('express')
const app = express()
const path = require('path')
const marked = require('marked')
const fs = require("fs");
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
})

app.post('/save', function(req, res) {
  console.log('req.body::', req.body);
  const {fileName, content} = req.body
  fs.writeFile(fileName, content, function(error) {
    if(error) {
      console.log(error);
    } else {
      console.log('the file has been saved!');
      res.json({'hello': 'hello'})
    }
  })

})


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/hello', function( req, res ) {
  res.send(marked('I am using __markdown__.'))
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
