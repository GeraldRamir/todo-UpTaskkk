const url= 'http://localhost:4000/tareas'
export const enviarDatos= async (objTarea)=>{
    await fetch(url,{
        method: 'POST',
        body: JSON.stringify(objTarea),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    window.location.href= 'index.html'

}

export const obtenerDatos= async ()=>{
    const respuesta= await fetch(url)
    const resultado= await respuesta.json()
    return resultado
}

export const eliminarTarea= async id=>{
    await fetch(`${url}/${id}`,{
        method: 'DELETE'
    })
}
