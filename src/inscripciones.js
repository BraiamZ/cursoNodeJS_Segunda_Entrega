const fs = require('fs');
let listaInscritos = [];

const inscribir = (aspirante) => {
    listar();
    let aspi = {
        nombre: aspirante.nombre,
        documento: aspirante.documento,
        correo: aspirante.correo,
        telefono: aspirante.telefono,
        idCurso: aspirante.idCurso
    }
    //console.log(listaCursos)
    let duplicado = listaInscritos.find(cur => cur.documento == aspirante.documento)
    if(!duplicado){
        listaInscritos.push(aspi);
        guardar();
    }
    else{
        console.log('Ya existe otro estudiante con ese nombre');
    }
}

const listar = () => {
    try{
        listaInscritos = require('../inscritos.json');
    } catch(error){
        console.log('No existe archivo')
        listaInscritos = [];
    }
   
    //Asyncronica
    //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'))
}
const guardar = () => {
    let datos = JSON.stringify(listaInscritos);
    fs.writeFile('inscritos.json', datos, (err)=>{
        if(err) throw (err);
        console.log('Archivo creado con exito');
    })
}


module.exports = {
    inscribir,
    //mostrar,
    //mostrarest,
    //mostrarmat,
    //actualizar,
    //eliminar
};