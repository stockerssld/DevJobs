module.exports={
    seleccionarSkils:(seleccionadas=[], opciones)=>{
        const skills= ['HTML5', 'CSS','Flexbox','React','Angular', 'Node', 'SQL', 'PHP','Apollo','Redux']

        let html=''
        skills.forEach(skill=>{
            html+=`
                <li>${skill}</li>
            `
        })
        
        return opciones.fn().html=html
    }
}