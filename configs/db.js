const { Sequelize } = require('sequelize');
const conf = require('./info')
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const sequelize = new Sequelize(conf.db.dbname, conf.db.username, conf.db.password, {
    host: conf.db.host,
    dialect: conf.db.dialect
});

