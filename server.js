const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); //hace publico un directorio
//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials'); //le dice a hbs que hay un directorio que va a tener todos los parciales
app.set('view engine', 'hbs'); //manejar el contenido dinamico

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'mauricio marin mArtiNez',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto  ${port}`);
});