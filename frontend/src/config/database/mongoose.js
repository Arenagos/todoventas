// mongoose.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todoventas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});

module.exports = mongoose;