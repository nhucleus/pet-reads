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
    {
      name: 'Poultry',
    },
    {
      name: 'Cow',
    },
    {
      name: 'Fish',
    },
    {
      name: 'Spider',
    },
    {
      name: 'Reptile & Amphibian',
    },
    {
      name: 'Bird',
    },
    {
      name: 'Horse',
    },
    {
      name: 'Rabbit'  
    }
    
    
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Species', null, {});
  }
};
