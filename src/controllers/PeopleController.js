const database = require('../models')

class PeopleController {
  static async index(req,res) {
    try{
      const people = await database.People.findAll()
      return res.status(200).json(people)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = PeopleController