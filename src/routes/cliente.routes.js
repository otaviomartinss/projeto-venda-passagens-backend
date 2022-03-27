/**
 * rotas da parte da interação da api com a tabela de clientes
 */

const router = require("express-promise-router")();
const clienteController = require("../controllers/cliente.controller");
const voosController = require("../controllers/voosController");

// Definindo as rotas do CRUD

//router.post("/clientes", clienteController.createCliente);
//router.put("/clientes", clienteController.updateCliente);
//router.get("/clientes/:id", clienteController.findClienteById);
//router.delete("/clientes/:id", clienteController.removeClienteById);


router.get("/voos", voosController.listAllVoos); //get db todos os voos
router.get("/clientes", voosController.listClientes);
router.post("/clientes", voosController.createCliente);




module.exports = router;
