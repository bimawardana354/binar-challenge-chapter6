'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'UserGames',
      [
        {
          username: 'budi123',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'lala123',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'banu123',
          password: 'banu321',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserGames', null, {});
  },
};
