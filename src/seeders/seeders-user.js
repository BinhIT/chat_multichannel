'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[
      {
        email:'admin',
        password:"admin123456",
        firstName:'Binh',
        lastName:'Phuong',
        address:'Can Tho',
        phonenumber:'0763232625',
        gender:'1',
        image:'232122',
        roleID:'ROLE',
        positionID:'R1', 

      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
