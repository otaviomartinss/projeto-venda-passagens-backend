/*
Conexão com o PostgreSQL
* */

const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

// conexão com o banco de dados
console.log(process.env.DATABASE_URL);
const pool = new Pool({
  // connectionString: 'postgres://postgres:banco@localhost:5432/ufu_dev',
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("Banco de dados conectado com sucesso!!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
