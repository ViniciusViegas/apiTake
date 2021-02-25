const app = require('./config/express')();
const port = app.get('port');
require('./atualizaData');

// Rodando o app na porta setada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});
