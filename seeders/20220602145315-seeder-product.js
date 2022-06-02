'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Products', [
       {
          name: 'John',
          description: 'Doe',
          amount: 100,
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
        name: 'John',
        description: 'Doe',
        amount: 100,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: 'John',
        description: 'Doe',
        amount: 100,
        createdAt: new Date(),
        updatedAt: new Date()
     }
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
