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
      'UserGameHistories',
      [
        {
          UserGameId: 1,
          time: '18:00:00',
          score: 'WIN',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserGameId: 1,
          time: '18:00:00',
          score: 'DRAW',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserGameId: 2,
          time: '18:00:00',
          score: 'WIN',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserGameId: 2,
          time: '18:00:00',
          score: 'WIN',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserGameId: 3,
          time: '18:00:00',
          score: 'LOSE',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserGameId: 3,
          time: '18:00:00',
          score: 'WIN',
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
    await queryInterface.bulkDelete('UserGameHistories', null, {});
  },
};
