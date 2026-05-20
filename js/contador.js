window.cantidad = 1;

const cantidadTexto =
document.getElementById("cantidadProducto");

const botonMas =
document.getElementById("masCantidad");

const botonMenos =
document.getElementById("menosCantidad");

/* ===================================== */
/* SOLO SI EXISTEN */
/* ===================================== */

if(
    botonMas &&
    botonMenos &&
    cantidadTexto
){

    botonMas.addEventListener(
    "click",
    () => {

        window.cantidad++;

        cantidadTexto.textContent =
        window.cantidad;

    });

    botonMenos.addEventListener(
    "click",
    () => {

        if(window.cantidad > 1){

            window.cantidad--;

            cantidadTexto.textContent =
            window.cantidad;

        }

    });

}