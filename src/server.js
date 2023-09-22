const express = require('express');
const app = express();

require('dotenv').config();

//require
app.use(require('./routes/routes'));

// Manejo de métodos no permitidos
app.use('/contacts', (req, res) => {
    res.status(405).send();
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send();
});

app.listen(process.env.PORT, () => {
    console.log('App listening on port: ', process.env.PORT);
});