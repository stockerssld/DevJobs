exports.formularioNuevaVacante=(req, res)=>{
    res.render('layouts/nueva-vacante',{
        nombrePagina:'Nueva Vacante',
        tagline: 'Llena el formulario y publica tu vacante'
    })
}