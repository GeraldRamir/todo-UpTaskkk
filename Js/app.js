import { obtenerDatos, eliminarTarea } from "./API.js"

(function() {
    const listaTareas= document.querySelector('#tareas')
    document.addEventListener('DOMContentLoaded',()=>{
        obtenerTareas();
        setInterval(obtenerDatos, 1000);
        
    })

    async function obtenerTareas() {
        const datos = await obtenerDatos();
        datos.forEach(elemento => {
            const { id, tarea, creador, importancia } = elemento; // Asegúrate de que `id` esté en los datos.
    
            // Crear el elemento <li>
            const taskItem = document.createElement("li");
            taskItem.className = "list-group-item";
            taskItem.id = id; // Asignar un id único al <li> basado en el id de la tarea.
    
            // Crear el div de indicador de tarea
            const indicatorDiv = document.createElement("div");
            taskItem.appendChild(indicatorDiv);
    
            // Crear el div de contenido principal
            const widgetContentDiv = document.createElement("div");
            widgetContentDiv.className = "widget-content p-0";
            taskItem.appendChild(widgetContentDiv);
    
            // Crear el wrapper
            const wrapperDiv = document.createElement("div");
            wrapperDiv.className = "widget-content-wrapper";
            widgetContentDiv.appendChild(wrapperDiv);
    
            // Crear el contenido izquierdo
            const contentLeftDiv = document.createElement("div");
            contentLeftDiv.className = "widget-content-left mr-2";
            wrapperDiv.appendChild(contentLeftDiv);
    
            // Crear el checkbox personalizado
            const customCheckboxDiv = document.createElement("div");
            customCheckboxDiv.className = "custom-checkbox custom-control";
            contentLeftDiv.appendChild(customCheckboxDiv);
    
            const checkboxInput = document.createElement("input");
            checkboxInput.className = "custom-control-input";
            checkboxInput.type = "checkbox";
            checkboxInput.id = `checkbox-${id}`; // Asignar id único al checkbox.
            customCheckboxDiv.appendChild(checkboxInput);
    
            const checkboxLabel = document.createElement("label");
            checkboxLabel.className = "custom-control-label";
            checkboxLabel.setAttribute("for", `checkbox-${id}`);
            checkboxLabel.innerHTML = "&nbsp;";
            customCheckboxDiv.appendChild(checkboxLabel);
    
            // Crear el contenido central
            const widgetContentLeftDiv = document.createElement("div");
            widgetContentLeftDiv.className = "widget-content-left";
            wrapperDiv.appendChild(widgetContentLeftDiv);
    
            // Crear el encabezado de la tarea
            const widgetHeadingDiv = document.createElement("div");
            widgetHeadingDiv.className = "widget-heading";
            widgetHeadingDiv.innerHTML = `${tarea}`;
            widgetContentLeftDiv.appendChild(widgetHeadingDiv);
    
            // Crear la insignia de importancia
            const badgeDiv = document.createElement("div");
            badgeDiv.textContent = importancia;
    
            if (importancia === 'Importante' || importancia === 'Muy importante' || importancia === 'Relevante') {
                badgeDiv.classList.add('badge', 'badge-danger', 'ml-2');
                indicatorDiv.className = "todo-indicator bg-danger";
            } else {
                badgeDiv.classList.add('badge', 'badge-warning', 'text-red', 'ml-2');
                indicatorDiv.className = "todo-indicator bg-warning";
            }
            widgetHeadingDiv.appendChild(badgeDiv);
    
            // Crear el subtítulo con el creador de la tarea
            const widgetSubheadingDiv = document.createElement("div");
            widgetSubheadingDiv.className = "badge badge-info ml-2";
            widgetSubheadingDiv.innerHTML = `<i>By: ${creador}</i>`;
            widgetContentLeftDiv.appendChild(widgetSubheadingDiv);
    
            // Crear el contenido derecho
            const widgetContentRightDiv = document.createElement("div");
            widgetContentRightDiv.className = "widget-content-right";
            wrapperDiv.appendChild(widgetContentRightDiv);
    
            // Crear el botón de éxito
            const successButton = document.createElement("button");
            successButton.className = "border-0 btn-transition btn btn-outline-success";
            widgetContentRightDiv.appendChild(successButton);
    
            // Añadir el icono de éxito al botón
            const successIcon = document.createElement("img");
            successIcon.src = "https://img.icons8.com/?size=100&id=6698&format=png&color=12B886";
            successIcon.style.width = "22px";
            successIcon.style.height = "22px";
            successButton.style.color = "green";
            successButton.appendChild(successIcon);
    
            // Crear el botón de peligro
            const dangerButton = document.createElement("button");
            dangerButton.className = "border-0 btn-transition btn btn-outline-danger";
            dangerButton.onclick = () => eliminar(taskItem);
            
            widgetContentRightDiv.appendChild(dangerButton);
    
            // Añadir el icono de peligro al botón
            const dangerIcon = document.createElement("lord-icon");
            dangerIcon.setAttribute("src", "https://cdn.lordicon.com/wpyrrmcq.json");
            dangerIcon.setAttribute("trigger", "loop");
            dangerIcon.setAttribute("delay", "1500");
            dangerIcon.setAttribute("colors", "primary:#911710");
            dangerIcon.style.width = "22px";
            dangerIcon.style.height = "22px";
            dangerButton.appendChild(dangerIcon);
    
            // Añadir el taskItem a la lista de tareas
            listaTareas.appendChild(taskItem);
        });
    }
    
    function eliminar(e) {
        const tareaID = e.id;
        eliminarTarea(tareaID);
        // Aquí puedes añadir la lógica para eliminar la tarea
    }
    


})()

