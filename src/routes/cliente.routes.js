/**
 * rotas da parte da interação da api com a tabela de clientes
 */

const router = require("express-promise-router")();
const voosController = require("../controllers/voosController");

// Definindo as rotas do CRUD

//router.post("/clientes", clienteController.createCliente);
//router.put("/clientes", clienteController.updateCliente);
//router.get("/clientes/:id", clienteController.findClienteById);
//router.delete("/clientes/:id", clienteController.removeClienteById);


router.get("/voos", voosController.listAllVoos); //get db todos os voos
//router.get("/voos/voo", voosController.listFilterVoos); //get db filtra os voos
router.get("/voos/:de/:para", voosController.listFilterVoos); //get db filtra os voos
router.get("/clientes", voosController.listClientes); //get todos os clientes
router.post("/clientes", voosController.createCliente); //cadastra cliente




module.exports = router;
