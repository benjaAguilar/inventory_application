const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false 
  }  
});