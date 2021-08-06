const hbs = require('hbs');


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
    let nombre1 = producto.producto3;
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