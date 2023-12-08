const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Kom@l111', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
