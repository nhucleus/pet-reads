'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBook = sequelize.define('UserBook', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    readStatus: DataTypes.INTEGER
  }, {});
  UserBook.associate = function(models) {
    // associations can be defined here
    UserBook.belongsTo(models.User, { foreignKey: 'userId' });
    UserBook.belongsTo(models.Book, { foreignKey: 'bookId' });
  };
  return UserBook;
};