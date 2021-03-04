const express = require('express');
const mongoose = require('mongoose');
const usuarios = require('./Routes/usuario');
const cors = require('cors');

const corsOptions = {
    origen: 'http://localhost:4200',
    optionsSuccessStatus: 200 //  algunos navegadores heredados (IE11, varios SmartTV) se bloquean en 204  
};

//conectar a la BD
mongoose.connect('mongodb://localhost:27017/desvarese', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('No se pudo conectar con MongoDB', err));


const app = express();
app.use(cors());
// app.options('/', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/usuarios', usuarios);


app.get('/', (req, res) => {
    res.send('API corriendo');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Api ejecutandose ${port}`);
});