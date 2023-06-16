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
      'UserGameBiodata',
      [
        {
          UserGameId: 1,
          fullname: 'Budi Budiman',
          city: 'Jakarta',
          birthday: '2013-12-30',
          gender: 'Male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserGameId: 2,
          fullname: 'Lala',
          city: 'Bekasi',
          birthday: '2005-01-30',
          gender: 'Female',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserGameId: 3,
          fullname: 'Banu',
          city: 'Depok',
          birthday: '2002-01-30',
          gender: 'Male',
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
    await queryInterface.bulkDelete('UserGameBiodata', null, {});
  },
};
