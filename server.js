const express = require('express');
const app = express();
 

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//registrando los partials

hbs.registerPartials(__dirname + '/views/partials');

//registrando los helpers

hbs.registerHelper('leerInformacion', () => {
    return new Date().getFullYear();
});

app.set('view engine', 'hbs');

app.get ('/',(req, res) => {
    res.render('home');
});

app.listen(port, () =>{
    console.log(`CONECTADO AL PUERTO ${port}`);
})