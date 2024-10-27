import { enviarDatos } from "./API.js";


const form= document.querySelector('.form');

document.addEventListener('DOMContentLoaded', ()=>{

    form.addEventListener('submit', validarFormulario)
})

function validarFormulario(e){
    e.preventDefault();
    const tarea= document.querySelector('#tarea').value;
    const creador= document.querySelector('#creador').value;
    const importancia= document.querySelector('#importancia').value;

    
    
    
    const objCampos={
        tarea,
        creador,
        importancia
    }
    if(Object.values(objCampos).includes('')){
        mostrarAlerta('Campos vacios')
    }else{
        enviarDatos(objCampos)
        console.log(enviarDatos)
    }
}
function mostrarAlerta(mensaje) {

    
    const alerta = document.querySelector('.border-red-400');
    if(!alerta) {
        const alerta = document.createElement('p');

        alerta.style.backgroundColor="red";
        alerta.style.color="pink";
        alerta.style.fontWeight="bold";
        alerta.style.width="160px";
        alerta.style.textAlign="center";
        alerta.style.borderRadius="5px";
        alerta.style.height="30px";
        alerta.style.lineHeight="30px";
    
        alerta.innerHTML = `
            <strong class="block sm:inline font-bold">${mensaje}</strong>
        `;
    
        form.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}