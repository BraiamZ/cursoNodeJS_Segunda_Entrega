const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const acciones = require('./acciones');
const inscripciones = require('./inscripciones')
require('./helpers');


let cursos = [];
let aspirante =[];
const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname,'../partials' )
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'hbs');

app.get('/',(req, res) => {
    res.render('index');
})
app.get('/cursos',(req,res) => {
    res.render('cursos');
})

app.post('/',(req,res) => {
    res.render('index', cursos = {
        idCurso: parseInt(req.body.idCurso),
        nombreCurso: req.body.nombreCurso,
        descripcion: req.body.descripcion,
        valor: parseInt(req.body.valor),
        modalidad: req.body.modalidad,
        intensidad: req.body.intensidad,
        estado: 'disponible'
    },acciones.crear(cursos));
})

app.get('/listadoCursos',(req,res) => {
    res.render('listadoCursos')
})

app.get('/InscribirseCurso',(req,res) => {
    res.render('inscribirme')
})

app.post('/InscribirAspirante',(req,res) => {
    aspirante = {
        nombre: req.body.nombreAspirante,
        documento: parseInt(req.body.documentoAspirante),
        correo: req.body.correoAspirante,
        telefono: parseInt(req.body.telefonoAspirante),
        idCurso: parseInt(req.body.cursos) 
    }
    res.render('index', inscripciones.inscribir(aspirante));
})
// app.get('*', (req, res) => {
//     res.render('error')
// })
 
app.listen(3000)