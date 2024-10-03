const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  //operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//tabla usuario
db.Usuario = require('../models/usuario.model.js')(sequelize, Sequelize);
//tabla libro
db.Libro = require('../models/libro.model.js')(sequelize, Sequelize);
//tabla autor
db.Autor = require('../models/autor.model.js')(sequelize, Sequelize);


module.exports = db;