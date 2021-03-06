'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    pageCount: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    publishDate: DataTypes.DATE,
    speciesId: DataTypes.INTEGER,
    bookCover: DataTypes.STRING,
    avgRating: DataTypes.DECIMAL(10, 2)
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Author, { foreignKey: 'authorId' });
    Book.belongsTo(models.Species, { foreignKey: 'speciesId' });
  };
  return Book;
};