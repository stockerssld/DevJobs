const mongoose = require('mongoose')
const Vacante = mongoose.model('Vacante')


exports.formularioNuevaVacante = (req, res) => {
    res.render('layouts/nueva-vacante', {
        nombrePagina: 'Nueva Vacante',
        tagline: 'Llena el formulario y publica tu vacante'
    })
}


exports.agregarVacante = async (req, rest) => {
    const vacante = new Vacante(req.body)

    vacante.skills = req.body.skills.split(",");
    // console.log(vacante)
    const nuevaVacante = await vacante.save()

    rest.redirect(`/vacantes/${nuevaVacante.url}`)
}

exports.mostrarVacante = async (req, res, next) => {
    const vacante = await Vacante.findOne({ url: req.params.url })
    if (!vacante) return next()

    res.render('layouts/vacante', {
        vacante,
        nombrePagina: vacante.titulo,
        barra: true,
    })
}