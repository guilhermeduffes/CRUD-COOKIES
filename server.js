// Importando o Express
const express = require('express');

// Criando uma instância do Express
const app = express();

// Definindo uma rota para o ponto de entrada '/'
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Importe o arquivo db.js
require('./db');

// Defina as rotas do seu servidor aqui
// ...

// Inicie o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});


app.listen(8080, () => {
    console.log('O servidor está rodando na porta 8080');
});