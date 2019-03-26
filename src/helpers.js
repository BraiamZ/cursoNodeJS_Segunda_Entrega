const hbs = require('hbs');

hbs.registerHelper('listarCursos', () => {
    console.log('Hola')
    listaCursos = require('../listado.json')
    let texto = "<table> \
    <thead>\
    <th>idCurso</th>\
    <th>Nombre</th>\
    <th>Valor</th>\
    <th>Modalidad</th>\
    <th>Descripcion</th>\
    <th>Intensidad</th>\
    <th>Estado</th>\
    </thead>\
    <tbody>";

    listaCursos.forEach(curso => {
        texto = texto + 
                '<tr>'+
                '<td>'+ curso.idCurso + '</td>' + 
                '<td>'+ curso.nombreCurso + '</td>' + 
                '<td>'+ curso.valor + '</td>' + 
                '<td>'+ curso.modalidad + '</td>' + 
                '<td>'+ curso.descripcion + '</td>' + 
                '<td>'+ curso.intensidad + '</td>' + 
                '<td>'+ curso.estado + '</td>' + 
                '</tr>'
    })
    texto = texto + '</tbody> </table>';
    return texto;
})


hbs.registerHelper('listarCursosAspirante', () => {
    listaCursos = require('../listado.json')
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