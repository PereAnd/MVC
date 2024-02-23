const mysql = require("mysql");
const { Sequelize } = require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.DB_URI;
const port = process.env.PORT_DB;

console.log({database})
console.log({username})
console.log({password})
console.log({host})
console.log({port})

const sequelize = new Sequelize({
  dialect: "mysql",
  host: host,
  port: port,
  username: username,
  password: password,
  database: database
});

const dbConnectMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected");
  } catch (e) {
    console.log("MySQL ERROR connected", e);
  }
};

module.exports = { sequelize, dbConnectMySQL };
