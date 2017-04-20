const express = require('express')
const app = express()
const path = require('path')
const marked = require('marked')
const fs = require("fs");
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

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
app.get('/', function (req, res) {
  res.render('index')
})
app.post('/save', function(req, res) {
  // console.log('req.body::', req.body);
  let {fileName, content} = req.body
  fileName = 'data/'+fileName+'.md'
  console.log(fileName);
  fs.writeFile(fileName, content, function(error) {
    if(error) {
      console.log(error);
    } else {
      console.log('the file has been saved!');
      res.sendFile('cake.md')
    }
  })

})

app.get('/:filename', function(req, res) {
  const path = 'data/'+req.params.filename+'.md'
  console.log(path);
  fs.readFile( path, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data = data || ''
    res.render('index', {data})
})
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
