const bodyParser = require('body-parser')
const people = require('./people')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(people)
}