'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('people', { 
      id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false 
      },
      name: { type: Sequelize.STRING, allowNull: false  },
      active: { type: Sequelize.BOOLEAN, allowNull: false  },
      email: { type: Sequelize.STRING, allowNull: false  },
      role: { type: Sequelize.STRING, allowNull: false  }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('people');
  }
};
