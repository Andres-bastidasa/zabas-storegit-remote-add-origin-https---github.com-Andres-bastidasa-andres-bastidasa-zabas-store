let cantidad = 1;

const cantidadTexto =
document.getElementById("cantidadProducto");

const botonMas =
document.getElementById("masCantidad");

const botonMenos =
document.getElementById("menosCantidad");

botonMas.addEventListener("click", () => {

    cantidad++;

    cantidadTexto.textContent = cantidad;

});

botonMenos.addEventListener("click", () => {

    if(cantidad > 1){

        cantidad--;

        cantidadTexto.textContent = cantidad;

    }

});