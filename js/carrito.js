// =============================
// MENU HAMBURGUESA
// =============================

function toggleMenu(){

    const menu = document.querySelector(".menu");

    if(menu){
        menu.classList.toggle("activo");
    }

}


// =============================
// AGREGAR PRODUCTO AL CARRITO
// =============================

function agregarAlCarrito(nombre, precio, imagen){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen
    };

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    alert("Producto agregado al carrito");

}


// =============================
// CONTADOR DEL CARRITO
// =============================

function actualizarContador(){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let contador = document.getElementById("contador-carrito");

    if(contador){
        contador.innerText = carrito.length;
    }

}


// =============================
// CAMBIAR IMAGEN DEL PRODUCTO
// =============================

function cambiarImagen(imagen){

    const principal = document.getElementById("imagenPrincipal");

    if(principal){
        principal.src = imagen.src;
    }

}


// =============================
// ZOOM PRODUCTO
// =============================

const zoomContainer = document.querySelector(".zoom-container");
const image = document.querySelector(".imagen-principal");

if(zoomContainer && image){

    zoomContainer.addEventListener("mousemove", function(e){

        const rect = zoomContainer.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        image.style.transformOrigin = xPercent + "% " + yPercent + "%";

        image.style.transform = "scale(2)";

    });

    zoomContainer.addEventListener("mouseleave", function(){

        image.style.transform = "scale(1)";

    });

}