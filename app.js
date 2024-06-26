const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const password = generatePassword(req.body)
  const options = req.body
  console.log('passeord is :', generatePassword(options))
  res.render('index', { password: password, options: options })
})

app.listen(port, () => [
  console.log(`running on http://localhost:${port}`)
])