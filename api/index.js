const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/teste', (req, res) => {
  return res.status(200).send({mensagem: 'Boas vindas a API'})
})

app.listen(port, ()=> console.log(`servidor rodando na porta ${port}`))

module.exports = app;