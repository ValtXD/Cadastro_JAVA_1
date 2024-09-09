const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

// Inicializando o app Express
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectando ao banco de dados SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

// Criando a tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  sobrenome TEXT,
  data_nascimento TEXT,
  genero TEXT,
  estado_civil TEXT,
  cpf_rg TEXT,
  email TEXT,
  telefone TEXT,
  endereco TEXT,
  nome_usuario TEXT,
  senha TEXT,
  identificacao_medica TEXT,
  condicoes_medicas TEXT,
  alergias TEXT,
  medicamentos TEXT
)`);

// Endpoint para receber os dados do frontend e armazená-los no banco de dados
app.post('/api/usuarios', (req, res) => {
  const {
    nome,
    sobrenome,
    data_nascimento,
    genero,
    estado_civil,
    cpf_rg,
    email,
    telefone,
    endereco,
    nome_usuario,
    senha,
    identificacao_medica,
    condicoes_medicas,
    alergias,
    medicamentos
  } = req.body;

  db.run(`INSERT INTO usuarios (nome, sobrenome, data_nascimento, genero, estado_civil, cpf_rg, email, telefone, endereco, nome_usuario, senha, identificacao_medica, condicoes_medicas, alergias, medicamentos) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [nome, sobrenome, data_nascimento, genero, estado_civil, cpf_rg, email, telefone, endereco, nome_usuario, senha, identificacao_medica, condicoes_medicas, alergias, medicamentos],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Usuário cadastrado com sucesso!', id: this.lastID });
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
