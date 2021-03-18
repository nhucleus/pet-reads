'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserBooks', [
      {
        userId: 1,
        bookId: 1,
        readStatus: 1
      },
      {
        userId: 1,
        bookId: 2,
        readStatus: 2
      },
      {
        userId: 1,
        bookId: 3,
        readStatus: 3,
      },
      {
        userId: 1,
        bookId: 4,
        readStatus: 1
      },
      {
        userId: 1,
        bookId: 5,
        readStatus: 2
      },
      {
        userId: 1,
        bookId: 6,
        readStatus: 3
      },
      {
        userId: 1,
        bookId: 7,
        readStatus: 1
      },
      {
        userId: 1,
        bookId: 8,
        readStatus: 2
      },
      {
        userId: 1,
        bookId: 9,
        readStatus: 3
      },
      {
        userId: 1,
        bookId: 10,
        readStatus: 1
      },
      {
        userId: 1,
        bookId: 11,
        readStatus: 2
      },
      {
        userId: 1,
        bookId: 12,
        readStatus: 3
      },
      {
        userId: 1,
        bookId: 13,
        readStatus: 1
      },
      {
        userId: 1,
        bookId: 14,
        readStatus: 2
      },
      {
        userId: 1,
        bookId: 16,
        readStatus: 3
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserBooks', null, {});
  }
};
