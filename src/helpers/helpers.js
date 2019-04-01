const hbs = require('hbs');

hbs.registerHelper('validar_inscripcion', (doc) => {
    console.log(doc);
})


hbs.registerHelper('listarCursos', () => {
    listaCursos = require('../../listado.json')
    listadoEstudiantes = require('../../inscritos.json')
    let texto = '';

    listaCursos.forEach(curso => {
        if(curso.estado === "disponible"){
        texto = texto + 
        '<table class="table" > \
        <thead class="thead-dark">\
        <th>idCurso</th>\
        <th>Nombre</th>\
        <th>Valor</th>\
        <th>Modalidad</th>\
        <th>Descripcion</th>\
        <th>Intensidad</th>\
        <th>Estado</th>\
        </thead>\
        <tbody>' + 
            '<tr>'+
            '<td>'+ curso.idCurso + '</td>' + 
            '<td>'+ curso.nombreCurso + '</td>' + 
            '<td>'+ curso.valor + '</td>' + 
            '<td>'+ curso.modalidad + '</td>' + 
            '<td>'+ curso.descripcion + '</td>' + 
            '<td>'+ curso.intensidad + '</td>' + 
            '<td>'+ curso.estado + '</td>' + 
            '</tr>' +
            '<tr>'+
            '<td>Estudiantes</td>' + 
                '<thead class="thead-dark">\
                <th>Nombre</th>\
                <th>Docuemnto</th>\
                <th>Correo</th>\
                <th>telefono</th>\
                </thead>'
            '</tr>'
            listadoEstudiantes.forEach(est => {
                if(curso.idCurso === est.idCurso)
            texto = texto + '<tr>'+
            '<td>'+ est.nombre + '</td>' + 
            '<td>'+ est.documento + '</td>' + 
            '<td>'+ est.correo + '</td>' + 
            '<td>'+ est.telefono + '</td>' + 
            '</tr>'

            })
        }
    })
    
    texto = texto + '</tbody> </table> ';
    return texto;
});

hbs.registerHelper('cursoEliminado', () => {
    console.log("hola");
});


hbs.registerHelper('listarCursosAspirante', () => {
    listaCursos = require('../../listado.json')
    // <select name="select">
    // <option value="value1">Value 1</option> 
    // <option value="value2" selected>Value 2</option>
    // <option value="value3">Value 3</option>
    // </select>
    let texto = "<select name='cursos'>";

    listaCursos.forEach(curso => {
        texto = texto + 
                '<option value="' + curso.idCurso + '">' + curso.nombreCurso + '</option>'
    })
    texto = texto + '</select>';
    return texto;
})

hbs.registerHelper('navBar', () => {
    let texto =  '<ul class="nav justify-content-center">\
     <li class="nav-item"> \
    <a class="nav-link active" href="cursos">Inscribir Cursos</a>\
    </li>\
    <li class="nav-item">\
    <a class="nav-link" href="listadoCursos">Listado de Cursos</a>\
  </li>\
  <li class="nav-item">\
    <a class="nav-link" href="InscribirseCurso">Inscribirse a un Curso</a>\
  </li>\
</ul>\
<hr>'
return texto
})

hbs.registerHelper('listarcursosbasico', () => {
    let texto = '';
    listaCursos = listaCursos = require('../../listado.json')
    listadoEstudiantes = require('../../inscritos.json')
    listaCursos.forEach(curso => {
        texto = texto + '<button class="btn btn-primary" type="button" data-toggle="collapse" href="#'+ curso.idCurso+'" aria-expanded="false" aria-controls="'+ curso.idCurso +'">\
        ' + `curso ${curso.nombreCurso}, ${curso.descripcion} con valor de: ${curso.valor}` + '</button>'
    })
    listaCursos.forEach(curso => {
        texto = texto  + 
        '<div class="collapse" id="'+ curso.idCurso+ '">\
        <table class="table" > \
        <thead class="thead-dark">\
        <th>idCurso</th>\
        <th>Nombre</th>\
        <th>Valor</th>\
        <th>Modalidad</th>\
        <th>Descripcion</th>\
        <th>Intensidad</th>\
        <th>Estado</th>\
        </thead>\
        <tbody>' + 
            '<tr>'+
            '<td>'+ curso.idCurso + '</td>' + 
            '<td>'+ curso.nombreCurso + '</td>' + 
            '<td>'+ curso.valor + '</td>' + 
            '<td>'+ curso.modalidad + '</td>' + 
            '<td>'+ curso.descripcion + '</td>' + 
            '<td>'+ curso.intensidad + '</td>' + 
            '<td>'+ curso.estado + '</td>' + 
            '</tr>' +
            '<tr>'+
            '<td>Estudiantes</td>' + 
                '<thead class="thead-dark">\
                <th>Nombre</th>\
                <th>Docuemnto</th>\
                <th>Correo</th>\
                <th>telefono</th>\
                </thead>'
            '</tr>'
            listadoEstudiantes.forEach(est => {
                if(curso.idCurso === est.idCurso)
            texto = texto + '<tr>'+
            '<td>'+ est.nombre + '</td>' + 
            '<td>'+ est.documento + '</td>' + 
            '<td>'+ est.correo + '</td>' + 
            '<td>'+ est.telefono + '</td>' + 
            '</tr>'
            })
        })    
    texto = texto + '</tbody> </table> </div>';
    return texto;
})

// Prueba Git
