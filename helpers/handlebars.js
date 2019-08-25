module.exports={
    seleccionarSkils:(seleccionadas=[], opciones)=>{
        const skills= ['HTML5', 'CSS','Flexbox','React','Angular', 'Node', 'SQL', 'PHP','Apollo','Redux']

        let html=''
        skills.forEach(skill=>{
            html+=`
                <li ${seleccionadas.includes(skill) ? 'class="activo"' :''}>${skill}</li>
            `
        })
        
        return opciones.fn().html=html
    },
    tipoContrato: (seleccionado, opciones)=>{
        return opciones.fn(this).replace(
            new RegExp(`value="${seleccionado}"`), '$& selected="selected"'
        )
    }
}