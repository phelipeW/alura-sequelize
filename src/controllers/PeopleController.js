const { People } = require('../models')
const { Registration } = require('../models')

class PeopleController {
  // PEOPLE
  static async index(req,res) {
    try{
      const people = await People.findAll()
      return res.status(200).json(people)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async findById(req, res) {
    const { id } = req.params
    try {
      const people = await People.findByPk(id)
      if(people){
        return res.status(200).json(people)
      } else {
        return res.status(404).json("Pessoa não encontrada!")
      }
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async create(req, res) {
    const people = req.body
    try {
      const newPeople = await People.create(people)
      
      return res.status(200).json(newPeople)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async update(req, res) {
    const people = req.body
    const { id } = req.params

    try {
      await People.update(people, { where: { id } })
      const newPeople = await People.findByPk(id)

      return res.status(200).json(newPeople)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await People.destroy({ where: { id: Number(id) } })
      return res.status(200).send()
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  // REGISTRATION

  static async indexRegistration(req,res) {
    const { studentId } = req.params
    try{
      const people = await Registration.findAll({
        where: {
          student_id : studentId
        }
      })
      return res.status(200).json(people)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async findRegistrationById(req, res) {
    const { studentId, registrationId } = req.params
    try {
      const registration = await Registration.findOne({
        where: {
          id: Number(registrationId),
          student_id: Number(studentId)
        }
      })
      if(registration){
        return res.status(200).json(registration)
      } else {
        return res.status(404).json("Matrícula não encontrada!")
      }
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async createRegistration(req, res) {
    const { studentId } = req.params;
    const registration = {...req.body, student_id : Number(studentId)};
    try {
      const newRegistration = await Registration.create(registration)
      return res.status(200).json(newRegistration)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async updateRegistration(req, res) {
    const { studentId, registrationId } = req.params
    const registration = req.body

    try {
      await Registration.update(registration, { where: {
        id: Number(registrationId),
        student_id: Number(studentId)
      }})
      const newRegistration = await Registration.findOne({
        where: {
          id: Number(registrationId),
          student_id: Number(studentId)
        }
      })

      return res.status(200).json(newRegistration)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async deleteRegistration(req, res) {
    const { studentId, registrationId } = req.params
    try {
      await Registration.destroy({ where: {
        id: Number(registrationId),
        student_id: Number(studentId)
      } })
      return res.status(200).send()
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = PeopleController