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
      {
        name: 'John Grogan'
      },
      {
        name: 'Norman Bridwell'
      },
      {
        name: 'Julie Seymore'
      },
      {
        name: 'James Bowen'
      },
      {
        name: 'Matthew Inman'
      },
      {
        name: 'Vicki Myron'
      },
      {
        name: 'Caitlin Doughty'
      },
      {
        name: 'Lucy Daniels'
      },
      {
        name: "Barbara O'Connor"
      },
      {
        name: 'W. Bruce Cameron'
      },
      {
        name: 'Catherine Ryan Hyde'
      },
      {
        name: 'Steven J. Carino'
      },
      {
        name: 'John Bradshaw'
      },
      {
        name: 'Temple Grandin'
      },
      {
        name: 'David Ezra Stein'
      },
      {
        name: 'Kelly Jones'
      },
      {
        name: 'Doreen Cronin'
      },
      {
        name: 'John Himmelman'
      },
      {
        name: 'Karma Wilson'
      },
      {
        name: 'Marcus Pfister'
      },
      {
        name: 'Eric Carle'
      },
      {
        name: 'James Walden'
      },
      {
        name: 'Lisa Strattin'
      },
      {
        name: 'Ann Gaines'
      },
      {
        name: 'Roger Tidbury'
      },
      {
        name: 'Miranda K Velasquez'
      },
      {
        name: 'Thomas Giovanetti'
      },
      {
        name: 'Gary A. Gallerstein'
      },
      {
        name: 'Anonymous'
      },
      {
        name: 'Kimberly Link'
      },
      {
        name: 'Sarah Martin'
      },
      {
        name: 'Sarah Yee'
      }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
