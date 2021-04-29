const { Level } = require('../models')

class LevelController {
  static async index(req,res) {
    try{
      const level = await Level.findAll()
      return res.status(200).json(level)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async findById(req, res) {
    const { id } = req.params;
    try {
      const level = await Level.findByPk(id)
      if(level){
        return res.status(200).json(level)
      } else {
        return res.status(404).json("Level não encontrado!")
      }
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async create(req, res) {
    const level = req.body;
    try {
      const newLevel = await Level.create(level)
      
      return res.status(200).json(newLevel)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async update(req, res) {
    const level = req.body
    const { id } = req.params

    try {
      await Level.update(level, { where: { id } })
      const newLevel = await Level.findByPk(id)

      return res.status(200).json(newLevel)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await Level.destroy({ where: { id: Number(id) } })
      return res.status(200).send()
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = LevelController