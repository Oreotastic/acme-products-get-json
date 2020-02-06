const express = require('express')
const path = require('path');
const {readJSON} = require('./db')
const app = express()
const port = 3000

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/api/companies', (req, res) => {
  readJSON('./companies.json')
    .then(response => res.send(response))
})

app.get('/api/products', (req, res) => {
  readJSON('./products.json')
    .then(response => res.send(response))

})

app.listen(port, () => console.log(`App listening at port ${port}`))