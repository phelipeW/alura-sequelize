'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('People', [{
      name: 'Ana Souza',
      active: true,
      email: 'ana@ana.com',
      role: 'student',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Marcos Cintra',
      active: true,
      email: 'marcos@marcos.com',
      role: 'student',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name: 'Paulo Morais',
      active: true,
      email: 'paulo@paulo.com',
      role: 'teacher',
      createdAt: new Date(),
      updatedAt: new Date(),
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
