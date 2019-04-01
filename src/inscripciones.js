const fs = require('fs');
let listaInscritos = [];

const inscribir = (aspirante) => {
    listar();
    let respuesta = false
    let aspi = {
        nombre: aspirante.nombre,
        documento: aspirante.documento,
        correo: aspirante.correo,
        telefono: aspirante.telefono,
        idCurso: aspirante.idCurso
    }
    //console.log(listaCursos)
    let duplicado = listaInscritos.find(cur => cur.documento == aspirante.documento, cur2 => cur2.idCurso == aspirante.idCurso)
    if(!duplicado){
        listaInscritos.push(aspi);
        respuesta = guardar();
        return respuesta;
    }
    else{
        console.log('Ya existe otro estudiante con ese nombre');
        return respuesta;
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
    return true;
}

const eliminarAspirante = (baja) => {
    listar();
    let noElimina = listaInscritos.filter(est => (est.idCurso != baja.idCurso || est.documento != baja.Cedula));
    if(noElimina.length == listaInscritos.length){
        console.log('Ningun curso a eliminar');
    }else{
        listaInscritos = noElimina;
        guardar();
    }
}


module.exports = {
    inscribir,
    //mostrar,
    //mostrarest,
    //mostrarmat,
    //actualizar,
    //eliminar,
    eliminarAspirante
};