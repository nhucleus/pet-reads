'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Species', [
    {
      name: 'Dog',
    },
    {
      name: 'Cat',
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Species', null, {});
  }
};
