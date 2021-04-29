const { Class } = require('../models')

class ClassController {
  static async index(req,res) {
    try{
      const classes = await Class.findAll({
        include: [{ association : 'teachers'}, { association : 'levels'}],
      })
      return res.status(200).json(classes)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async findById(req, res) {
    const { id } = req.params;
    try {
      const classes = await Class.findByPk(id)
      if(classes){
        return res.status(200).json(classes)
      } else {
        return res.status(404).json("Turma não encontrada!")
      }
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async create(req, res) {
    const classes = req.body;
    try {
      const newClass = await Class.create(classes)
      
      return res.status(200).json(newClass)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async update(req, res) {
    const classes = req.body
    const { id } = req.params

    try {
      await Class.update(classes, { where: { id } })
      const newClass = await Class.findByPk(id)

      return res.status(200).json(newClass)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await Class.destroy({ where: { id: Number(id) } })
      return res.status(200).send()
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = ClassController