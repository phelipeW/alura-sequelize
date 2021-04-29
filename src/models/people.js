'use strict';
const {
  Model
} = require('sequelize');

const Models = require('../models')

module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Registration, {
        foreignKey: {
          name: 'student_id',
        }
      })
      this.hasMany(models.Class, {
        foreignKey: {
          name: 'teacher_id',
        }
      })
    }
  };
  People.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};