'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      pageCount: {
        type: Sequelize.INTEGER
      },
      authorId: {
        type: Sequelize.INTEGER,
        references: { model: 'Authors' }
      },
      publisher: {
        type: Sequelize.STRING
      },
      publishDate: {
        type: Sequelize.DATE
      },
      speciesId: {
        type: Sequelize.INTEGER,
        references: { model: 'Species' }
      },
      bookCover: {
        type: Sequelize.STRING
      },
      avgRating: {
        type: Sequelize.DECIMAL(10, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};