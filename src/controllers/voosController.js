
const db = require("../config/database");

exports.listAllVoos = async (req, res) => {
  const response = await db.query("SELECT * FROM voos");
  res.status(200).send(response.rows);
};

exports.listFilterVoos = async (req, res) => {
  console.log("Estou aqui")
  const vooDe = (req.params.de);
  const vooPara = (req.params.para);
  console.log(vooDe)
  const response = await db.query(
    "SELECT * FROM voos WHERE de = $1 AND para = $2",
    [
      vooDe,
      vooPara,
    ]
  );
  res.status(200).send(response.rows);
};

exports.listClientes = async (req, res) => {
  const response = await db.query("SELECT * FROM clientes");
  res.status(200).send(response.rows);
};

/* exports.findVooByCia = async (req, res) => {
  const cia = parseInt(req.params.cia);
  const response = await db.query("SELECT * FROM voos WHERE cia = $1", [
    cia,
  ]);
  res.status(200).send(response.rows);
}; */

exports.createCliente = async (req, res) => {
  const {
    clienteNome,
    clienteEmail,
    clienteSexo,
    clienteDtNasc,
    clienteCpf,
    clientewhats,
    clienteCep,
    clienteEndereco,
    clienteSenha,
  } = req.body;
  console.log(req.body);
  console.log(clienteNome);
  const response = await db.query(
    "INSERT INTO clientes (nome, email, sexo, nascimento, cpf, whatsapp, cep, endereco, senha) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [
      clienteNome,
      clienteEmail,
      clienteSexo,
      clienteDtNasc,
      clienteCpf,
      clientewhats,
      clienteCep,
      clienteEndereco, 
      clienteSenha,
    ]
  );

  res.status(201).send({
    message: "Cliente inserido com sucesso",
    body: {
      cliente: {
        clienteNome,
        clienteEmail,
        clienteSexo,
        clienteDtNasc,
        clienteCpf,
        clientewhats,
        clienteCep,
        clienteEndereco, 
      },
    },
  });
}; 
 
