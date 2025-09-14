const express = require('express');
const dotenv = require('dotenv');

// Configuração do dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

// Rotas
app.use('/auth', require('./routes/auth')); // Exemplo de rota
app.use('/ia', require('./routes/ia')); // Exemplo de rota

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
