const fs = require('fs');
let listaCursos = [];

const crear = (cursos) => {
    listar();
    let curso = {
        idCurso: cursos.idCurso,
        nombreCurso: cursos.nombreCurso,
        descripcion: cursos.descripcion,
        valor: cursos.valor,
        modalidad: cursos.modalidad,
        intensidad: cursos.intensidad,
        estado: cursos.estado
    }
    //console.log(listaCursos)
    let duplicado = listaCursos.find(cur => cur.idCurso == cursos.idCurso)
    if(!duplicado){
        listaCursos.push(curso);
        console.log(listaCursos)
        guardar();
    }
    else{
        console.log('Ya existe otro estudiante con ese nombre');
    }
}

const listar = () => {
    try{
        listaCursos = require('../listado.json');
    } catch(error){
        console.log('No existe archivo')
        listaCursos = [];
    }
   
    //Asyncronica
    //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'))
}
const guardar = () => {
    let datos = JSON.stringify(listaCursos);
    fs.writeFile('listado.json', datos, (err)=>{
        if(err) throw (err);
        console.log('Archivo creado con exito');
    })
}

const eliminar = (deletecurso) => {
    listar();
    let noElimina = listaCursos.filter(cur => cur.idCurso != deletecurso.idCurso);
    if(noElimina.length == listaCursos.length){
        console.log('Ningun curso a eliminar');
    }else{
        listaCursos = noElimina;
        guardar();
    }
}

const deshabilitar = (curso) => {
    listar();
    let encontrado = listaCursos.find(buscar => buscar.idCurso == curso.idCurso);
    console.log(encontrado)
    if(!encontrado){
        console.log('No existe estudiante');
    }
    else{
        encontrado.estado = 'noDisponible'
    }

}
module.exports = {
    crear,
    //mostrar,
    //mostrarest,
    //mostrarmat,
    //actualizar,
    eliminar,
    deshabilitar
    
    
};