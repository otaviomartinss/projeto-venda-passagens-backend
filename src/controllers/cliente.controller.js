/**
 * CRUD da tabela de clientes
 */
// docker run -d --name some-postgres -e POSTGRES_PASSWORD=banco -e PGDATA=/var/lib/postgresql/data/pgdata -v /home/marciocunha/postgresData:/var/lib/postgresql/data postgres:11

const db = require("../config/database");

exports.createCliente = async (req, res) => {
  const {
    clienteNome,
    clienteEmail,
    clienteCep,
    clienteEndereco,
    clienteCidade,
    clienteUf,
    clienteBairro,
  } = req.body;
  console.log(req.body);
  console.log(clienteNome);
  const response = await db.query(
    "INSERT INTO clientes (nome, email, cep, endereco, cidade, uf, bairro) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [
      clienteNome,
      clienteEmail,
      clienteCep,
      clienteEndereco,
      clienteCidade,
      clienteUf,
      clienteBairro,
    ]
  );

  res.status(201).send({
    message: "Cliente inserido com sucesso",
    body: {
      cliente: {
        clienteNome,
        clienteEmail,
        clienteCep,
        clienteEndereco,
        clienteCidade,
        clienteUf,
        clienteBairro,
      },
    },
  });
};

exports.listAllClientes = async (req, res) => {
  const response = await db.query("SELECT * FROM clientes ORDER BY id");
  res.status(200).send(response.rows);
};

exports.findClienteById = async (req, res) => {
  const clienteID = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM clientes WHERE id = $1", [
    clienteID,
  ]);
  res.status(200).send(response.rows);
};

exports.updateCliente = async (req, res) => {
  const clienteID = parseInt(req.body.clienteID);
  const {
    clienteNome,
    clienteEmail,
    clienteCep,
    clienteEndereco,
    clienteCidade,
    clienteUf,
    clienteBairro,
  } = req.body;

  //clienteID = parseInt(clienteID);
  console.log(req.body);
  console.log(clienteNome);
  const response = await db.query(
    "UPDATE clientes SET nome = $2, email = $3, cep = $4, endereco = $5, cidade = $6, uf = $7, bairro = $8 WHERE id = $1",
    [
      clienteID,
      clienteNome,
      clienteEmail,
      clienteCep,
      clienteEndereco,
      clienteCidade,
      clienteUf,
      clienteBairro,
    ]
  );

  console.log(response);
  if (response.rowCount > 0) {
    res.status(201).send({
      message: "Cliente alterado com sucesso!",
      body: {
        cliente: {
          clienteID,
          clienteNome,
          clienteEmail,
          clienteCep,
          clienteEndereco,
          clienteCidade,
          clienteUf,
          clienteBairro,
        },
      },
    });
  } else {
    res.status(201).send({
      message: "Cliente não alterado",
      body: {
        cliente: {
          clienteID,
          clienteNome,
          clienteEmail,
          clienteCep,
          clienteEndereco,
          clienteCidade,
          clienteUf,
          clienteBairro,
        },
      },
    });
  }
};

exports.removeClienteById = async (req, res) => {
  const clienteID = parseInt(req.params.id);
  console.log(clienteID);

  const response = await db.query("DELETE FROM clientes WHERE id = $1", [
    clienteID,
  ]);

  console.log(response);
  if (response.rowCount > 0) {
    res.status(201).send({
      message: "Cliente removido com sucesso!",
      body: {
        cliente: { clienteID },
      },
    });
  } else {
    res.status(201).send({
      message: "Cliente não removido",
      body: {
        cliente: { clienteID },
      },
    });
  }
};
