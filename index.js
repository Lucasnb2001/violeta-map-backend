const express = require('express')
const alertaRoute = require('./routes/alerta.route.js');
const localSeguroRoute = require('./routes/localSeguro.route.js');
const LocalSeguro = require('./models/localSeguro.model.js');

const app = express()
const port = 3000

app.use(express.json());
app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})

// Conexão com MongoDB
const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://lucasnb:1122@cluster0.e578w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

// routes
app.use("/api/alerta", alertaRoute);
app.use("/api/local", localSeguroRoute);
