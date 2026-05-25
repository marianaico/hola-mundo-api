const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hola', (req, res) => {
    res.json({
        mensaje: "Hola Mundo"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});