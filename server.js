const express = require('express');
const app = express();
 

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

//registrando los partials

hbs.registerPartials(__dirname + '/views/partials');

//registrando los helpers

hbs.registerHelper('leerInformacion', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('leerJson1', () => {
    const fs=require('fs');
    let rawdata = fs.readFileSync('data/datos.json',);
    let producto = JSON.parse(rawdata);
    let nombre1 = producto.producto1;
    return nombre1;
});

hbs.registerHelper('leerJson2', () => {
    const fs=require('fs');
    let rawdata = fs.readFileSync('data/datos.json',);
    let producto = JSON.parse(rawdata);
    let nombre1 = producto.producto2;
    return nombre1;
});

hbs.registerHelper('leerJson3', () => {
    const fs=require('fs');
    let rawdata = fs.readFileSync('data/datos.json',);
    let producto = JSON.parse(rawdata);
    let nombre1 = producto.producto1;
    return nombre1;
});

hbs.registerHelper('leerJson1_Precio', () => {
    const fs=require('fs');
    let rawdata = fs.readFileSync('data/datos.json',);
    let producto = JSON.parse(rawdata);
    let nombre1 = producto.producto1_precio;
    return nombre1;
});

hbs.registerHelper('leerJson2_Precio', () => {
    const fs=require('fs');
    let rawdata = fs.readFileSync('data/datos.json',);
    let producto = JSON.parse(rawdata);
    let nombre1 = producto.producto2_precio;
    return nombre1;
});

hbs.registerHelper('leerJson3_Precio', () => {
    const fs=require('fs');
    let rawdata = fs.readFileSync('data/datos.json',);
    let producto = JSON.parse(rawdata);
    let nombre1 = producto.producto3_precio;
    return nombre1;
});


app.set('view engine', 'hbs');

app.get ('/',(req, res) => {
    res.render('home');
});

app.listen(3000, () =>{
    console.log("CONECTADO");
})