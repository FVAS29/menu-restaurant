const express = require('express');
const cors = require('cors');

const app = express();

// Habilitar o CORS para permitir que o frontend acesse o backend
app.use(cors());

// Usar JSON como formato de resposta
app.use(express.json());

// Rota de exemplo para servir os dados do cardápio
app.get('/menu', (req, res) => {
  const menu = [
    { id: 1, name: 'Pizza Margherita', price: 25 },
    { id: 2, name: 'Pizza Pepperoni', price: 30 },
    { id: 3, name: 'Salada Caesar', price: 20 },
  ];
  res.json(menu);
});

// Definir a porta em que o servidor vai rodar
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
