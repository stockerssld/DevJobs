exports.mostrarTrabajos=(req, res)=>{
    res.render('layouts/home',{
        nombrePagina: 'devJobs',
        tagline: 'Encuentra y publica trabajos para desarrolladores Web',
        barra: true,
        boton: true
    })
}