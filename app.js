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
        realizada: true
    }
]


const tareaInput = document.querySelector("#input")
const boton = document.querySelector("#button")
const tbody = document.querySelector("#tbody")
const tareasRealizadas = document.querySelector("#realizadasTotal")

const realizadasTotal = () => {
    let realizadas = 0;
    tareas.forEach((tarea) => {
        if (tarea.realizada == true) {
            realizadas++;
        }
    });
    tareasRealizadas.innerHTML = realizadas;
}

const actualizarChecked = (id) => {
    const tareaRealizada = tareas.findIndex((tarea) => tarea.id == id);
    tareas[tareaRealizada].realizada = !tareas[tareaRealizada].realizada;
renderizarTabla();
}

const actualizarTotal = () => {
    let total = document.querySelector("#valorTotal");
    total.innerHTML = tareas.length
}

const renderizarTabla = () => {
tbody.innerHTML = ''
tareas.forEach((tarea) => {
    let row = `<tr>
    <td>${tarea.id}</td>
    <td>${tarea.descripcion}</td>
    <td><input type='checkbox' onclick='actualizarChecked(${tarea.id})'></td>`;

    if (tarea.realizada == false) {
        row += `<td><i class="fa-solid fa-x"></i></td>`;

    } else {
        row += `<td><i class="fa-solid fa-check"></i></td>`;
    }
    row += `</tr>`;
    tbody.innerHTML += row;

});
actualizarTotal();
realizadasTotal();
}

renderizarTabla();



boton.addEventListener("click", function () {
    const nuevaDescripcion = tareaInput.value;
    const nuevaTarea = {
        id: tareas.length + 1,
        descripcion: nuevaDescripcion,
        realizada: false,
    };
    if (nuevaDescripcion === "") {
        alert("no se puede agregar una tarea vacía")
    } else {
        tareas.push(nuevaTarea);
        renderizarTabla();
        tareaInput.value = '';
    }

});


