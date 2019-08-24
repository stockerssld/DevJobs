const mongoose= require('mongoose')
const Vacante = mongoose.model('Vacante')


exports.formularioNuevaVacante=(req, res)=>{
    res.render('layouts/nueva-vacante',{
        nombrePagina:'Nueva Vacante',
        tagline: 'Llena el formulario y publica tu vacante'
    })
}


exports.agregarVacante= async(req, rest)=>{
    const vacante = new Vacante(req.body)

    vacante.skills = req.body.skills.split(",");
    
    const nuevaVacante = await vacante.save()

    rest.redirect(`/vacantes/${nuevaVacante.url}`)
}