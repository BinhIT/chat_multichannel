const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('ame_chat_server', 'root', null, {
  host: 'localhost',
  dialect: 'mysql' ,
  logging: false
});

let connectDB = async()=>
{
    try {
        await sequelize.authenticate();
        console.log('Kết nối sequelize thành công.');
      } catch (error) {
        console.error('Kết nối sequelize thành không công:', error);
      }
}
module.exports =  connectDB;