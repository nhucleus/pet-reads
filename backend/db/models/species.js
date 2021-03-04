'use strict';
module.exports = (sequelize, DataTypes) => {
  const Species = sequelize.define('Species', {
    name: DataTypes.STRING
  }, {});
  Species.associate = function(models) {
    // associations can be defined here
    Species.hasMany(models.Book, { foreignKey: 'bookId' });
  };
  return Species;
};