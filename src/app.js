const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const acciones = require('./acciones');
const inscripciones = require('./inscripciones')
require('./helpers/helpers');


let cursos = [];
let aspirante =[];
const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname,'../partials');
const dirNode_modules = path.join(__dirname , '../node_modules')
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
console.log(directoriopartials);
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
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

app.post('/cursos',(req,res) => {
    res.render('cursos')
})

app.get('/InscribirseCurso',(req,res) => {
    res.render('inscribirme')
})

app.post('/eliminarCurso', (req,res) => {
    deletecurso = {
        idCurso: parseInt(req.body.eliminarCurso)
    },acciones.eliminar(deletecurso)
    res.render("listadoCursos");
})

app.get('/listadoCursos', (req,res)=>{
    res.render('listadoCursos')
})

app.post('/InscribirAspirante',(req,res) => {
    let respEx = "RespuestaExitosa.html";
    let respFa = "RespuestaFallida.html";
    let resp
    aspirante = {
        nombre: req.body.nombreAspirante,
        documento: parseInt(req.body.documentoAspirante),
        correo: req.body.correoAspirante,
        telefono: parseInt(req.body.telefonoAspirante),
        idCurso: parseInt(req.body.cursos) 
    }
    let respuesta = inscripciones.inscribir(aspirante)
    respuesta ? resp=respEx:resp=respFa;
    //res.render(inscripciones.inscribir(aspirante));
    res.sendFile(resp, {root: path.join(__dirname,"../views") })
})

app.post('/listadoCursos', (req, res) => {
    baja = {
        idCurso: parseInt(req.body.IdCurso),
        Cedula: parseInt(req.body.documentoAspirante)
    }, inscripciones.eliminarAspirante(baja);
    res.render('listadoCursos')
})

app.post('/deshabilitar', (req,res) => {
    curso = {
        idCurso: parseInt(req.body.curso)
    }, acciones.deshabilitar(curso)
    res.render('listadoCursos')
})
// app.get('*', (req, res) => {
//     res.render('error')
// })
 
app.listen(3000)