'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      {
        name: 'Alexandra Horowitz'
      },
      {
        name: 'Jennifer Copley'
      },
      {
        name: 'Gene Zion'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
