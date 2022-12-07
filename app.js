const express = require('express');
const hbs = require('hbs');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public', { extensions: ['html'] }))


app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'García Salado',
        titulo: 'Curso de Node'
    });
})
app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'García Salado',
        titulo: 'Curso de Node'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'García Salado',
        titulo: 'Curso de Node'
    });;
})
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})


app.listen(PORT, () => {
    console.log('Web Application running on port: ',PORT);
});
