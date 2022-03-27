const express = require("express"); // framework que trabalha com o protocolo http - escutando as requisições http (GET, PUT, POST, DELETE)
const bodyParser = require("body-parser");
const app = require("./src/app.js");

//app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  express.json({
    type: "application/json",
  })
);

app.listen((port = 5000), function () {
  console.log(`server is running on port ${port}`);
});
