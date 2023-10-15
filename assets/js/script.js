let tareas = [{ id: 1, tarea: "ir de compras", listo: true }, { id: 2, tarea: "estudiar", listo: false }, { id: 3, tarea: "cocinar", listo: true }]
function mostrarTareas(listatareas) {
    const elementoTabla = document.getElementById("tablaTareas")
    const cabeceras = `<tr>
        <th>ID</th>
    <th>Tarea</th>
    <th></th>
    <th></th>
</tr >`
    const filas = listatareas.map((elemento) => `<tr>
    <th>${elemento.id}</th>
    <th>${elemento.tarea}</th>
    <th><input type="checkbox" onclick="enClickMarcar(${elemento.id},${elemento.listo.toString()})" ${elemento.listo ? "checked" : ""} ></th>
    <th><button onclick="enClickEliminar(${elemento.id})">X</button></th>
</tr>`)
    elementoTabla.innerHTML = cabeceras + filas
}

function contarTareas(listatareas) {
    const totalTareas = listatareas.length
    const elementoTotalTareas = document.getElementById("total")
    elementoTotalTareas.innerHTML = totalTareas
}

function contarTareasListas(listatareas) {
    const tareaslistas = listatareas.filter((elemento) => elemento.listo === true)
    const totalTareasRealizadas = tareaslistas.length
    const elementoTotalTareas = document.getElementById("totalListas")
    elementoTotalTareas.innerHTML = totalTareasRealizadas
}

function agregarTarea(tarea) {
    const ultimoElemento = tareas[tareas.length - 1]
    let id = 1
    if (!!ultimoElemento) id = ultimoElemento.id + 1
    const listo = false
    tareas.push({ id: id, tarea: tarea, listo: listo })
}

function enClickAgregar() {
    const input = document.getElementById("input")
    const tarea = input.value
    input.value = ""
    agregarTarea(tarea)
    mostrarTareas(tareas)
    contarTareas(tareas)
    contarTareasListas(tareas)

}

function eliminarTarea(id) {
    const tareasFiltradas = tareas.filter((elemento) => elemento.id !== id)
    tareas = tareasFiltradas

}

function enClickEliminar(id) {
    eliminarTarea(id)
    mostrarTareas(tareas)
    contarTareas(tareas)
    contarTareasListas(tareas)

}
function marcarTareaLista(id, listo) {
    const tarea = tareas.find((elemento) => elemento.id === id)
    tarea.listo = listo

}

function enClickMarcar(id, listo) {
    marcarTareaLista(id, !listo)
    contarTareasListas(tareas)
    mostrarTareas(tareas)

}

mostrarTareas(tareas)
contarTareas(tareas)
contarTareasListas(tareas)

