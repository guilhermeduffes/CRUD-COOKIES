// Importe o Mongoose
const mongoose = require('mongoose');

// Defina a conexão com o banco de dados
mongoose.connect('mongodb://localhost/Crud-DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Obtenha a conexão padrão do Mongoose
const db = mongoose.connection;

// Lide com erros de conexão
db.on('error', console.error.bind(console, 'Erro na conexão com o banco de dados:'));
db.once('open', function() {
  console.log('Conexão com o banco de dados estabelecida com sucesso');
});
