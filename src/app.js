/*

Arquivo de configuração da aplicação
*/
const router = require("express-promise-router")();

const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");
const clienteRoute = require("./routes/cliente.routes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/api/", clienteRoute);

module.exports = app;
