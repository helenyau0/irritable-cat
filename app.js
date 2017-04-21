const express = require('express')
const app = express()
const path = require('path')
const marked = require('marked')
const fs = require("fs");
const bodyParser = require('body-parser')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')))


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


// ROUTES

app.post('/save', function(req, res) {
  console.log('helllo were saving');
  console.log('req.body::', req.body);
  let {fileName, content} = req.body

  if( fileName.split('.').length >= 0 ) {
    fileName = 'data/'+fileName
  } else {
    fileName = 'data/'+fileName+'.md'
  }

  console.log(fileName);
  fs.writeFile(fileName, content, function(error) {
    if(error) {
      console.log(error);
    } else {
      console.log('the file has been saved!');
    }
  })

})

app.get('/:filename', function(req, res) {
  const path = 'data/'+req.params.filename
  const markdownFile = req.params.filename
  let data
  fs.readFile( path, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    data = data || ''
    const dataFolder = './data'
    fs.readdir(dataFolder, (err, files) => {
      res.render('index', { files, data, markdownFile })
    })
  })
})

app.get('/', function(req, res) {
  const dataFolder = './data'
  fs.readdir(dataFolder, (err, files) => {
    res.render('index', { files })
  })
})


app.listen(3000, function () {
  console.log('listening on port 3000!')
})
