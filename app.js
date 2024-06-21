const tareas = [
    {
        id: 1,
        descripcion: "Lavar la ropa",
        realizada: false,
    },
    {
        id: 2,
        descripcion: "Comprar pan",
        realizada: false,
    },
    {
        id: 3,
        descripcion: "Pagar cuentas",
        realizada: false,
    }
]


const tareaInput = document.querySelector("#input")
const boton = document.querySelector("#button")
const tbody = document.querySelector("#tbody")

tbody.innerHTML = ''

tareas.forEach((tarea) => {
   tbody.innerHTML += `<tr>
    <td> ${tarea.id}</td>
    <td> ${tarea.descripcion}</td>
    </tr>`

});

boton.addEventListener("click", function() {
    const nuevaDescripcion = tareaInput.value;
    const nuevaTarea = {
        id: tareas.length + 1,
        descripcion: nuevaDescripcion,
        realizada: false,
    };
    tareas.push(nuevaTarea);
    tbody.innerHTML += `<tr>
        <td>${nuevaTarea.id}</td>
        <td>${nuevaTarea.descripcion}</td>
    </tr>`;
    tareaInput.value = '';
});

//AGREGAR LOGICA: SI NO SE ESCRIBE NADA NO AGREGAR NADA