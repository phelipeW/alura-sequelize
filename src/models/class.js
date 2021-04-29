'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Registration, {
        foreignKey: {
          name: 'class_id',
        },
      })
      this.belongsTo (models.People, {
        foreignKey: {
          name: 'teacher_id',
        },
        as: 'teachers'
      })
      this.belongsTo (models.Level,  {
        foreignKey: {
          name: 'level_id',
        },
        as: 'levels'
      })
    }
  };
  Class.init({
    initial_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};