//Ejercicio 2.2

function pintar(elemento) {
    elemento.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", function () {
    pintar(ele)
});

//Ejercicio 2.3

function cambiarColor(pintar, color) {
    pintar.style.backgroundColor = color
}

pintar(ele)
cambiarColor(ele, 'green')




