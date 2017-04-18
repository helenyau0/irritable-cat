const express = require('express')
const app = express()
const path = require('path')
const marked = require('marked')
console.log(marked('I am using __markdown__.'));


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


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

console.log('joing to path', path.join(__dirname,'public'));

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
