/**
 * Chamada das api da aplicação
 */

const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Backend TWM",
  });
});

router.get("/", (req, res) => {
  console.log("get /");
  res.status(200).send("SERVIDOR ESTÁ FUNCIONANDO");
});

module.exports = router;
