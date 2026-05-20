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
// AGREGAR AL CARRITO
// =============================

function agregarAlCarrito(){

    let carrito =
    JSON.parse(
        localStorage.getItem("carrito")
    ) || [];

    const producto = {

        nombre:
        document.getElementById(
        "nombreProducto"
        ).innerText,

        precio: parseInt(

    document.getElementById(
    "precioProducto"
    ).textContent

    .replace(/[^\d]/g, "")

) || 0,

        imagen:
        document.getElementById(
        "imagenPrincipal"
        ).src,

        cantidad: cantidad

    };

    const existente =
    carrito.find(
        item => item.nombre === producto.nombre
    );

    if(existente){

        existente.cantidad += cantidad;

    }else{

        carrito.push(producto);

    }

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    renderCarrito();

}

// =============================
// ACTUALIZAR CONTADOR
// =============================

function actualizarContador(){

    let carrito =
    JSON.parse(
        localStorage.getItem("carrito")
    ) || [];

    let total = 0;

    carrito.forEach(producto => {

        total += producto.cantidad;

    });

    const contador =
    document.getElementById(
    "contador-carrito"
    );

    if(contador){

        contador.innerText = total;

    }

}

// =============================
// CAMBIAR IMAGEN DEL PRODUCTO
// =============================

function cambiarImagen(imagen){

    const principal =
    document.getElementById("imagenPrincipal");

    if(principal){

        principal.src = imagen.src;

    }

}

// =============================
// ZOOM PRODUCTO
// =============================

const zoomContainer =
document.querySelector(".zoom-container");

const image =
document.querySelector(".imagen-principal");

if(zoomContainer && image){

    zoomContainer.addEventListener(
    "mousemove",
    function(e){

        const rect =
        zoomContainer.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent =
        (x / rect.width) * 100;

        const yPercent =
        (y / rect.height) * 100;

        image.style.transformOrigin =
        xPercent + "% " + yPercent + "%";

        image.style.transform = "scale(2)";

    }
    );

    zoomContainer.addEventListener(
    "mouseleave",
    function(){

        image.style.transform = "scale(1)";

    }
    );

}

// =============================
// RENDER CARRITO
// =============================

function renderCarrito(){

    const carritoItems =
    document.getElementById(
    "carritoItems"
    );

    const subtotalCarrito =
    document.getElementById(
    "subtotalCarrito"
    );

    if(!carritoItems) return;

    let carrito =
    JSON.parse(
        localStorage.getItem("carrito")
    ) || [];

    carritoItems.innerHTML = "";

    let subtotal = 0;

    if(carrito.length === 0){

        carritoItems.innerHTML = `

        <p class="carrito-vacio">
            Tu carrito está vacío
        </p>

        `;

    }

    carrito.forEach((producto,index)=>{

        subtotal +=
        producto.precio * producto.cantidad;

        carritoItems.innerHTML += `

        <div class="carrito-producto">

            <img src="${producto.imagen}">

            <div class="info-carrito">

                <div>

                    <h4>${producto.nombre}</h4>

                    <p>
                    $${(
                        producto.precio *
                        producto.cantidad
                    ).toLocaleString()}
                    </p>

                    <small>
                    Cantidad: ${producto.cantidad}
                    </small>

                </div>

                <button
                class="eliminar-item"
                onclick="eliminarProducto(${index})"
                >
                    Eliminar
                </button>

            </div>

        </div>

        `;

    });

    subtotalCarrito.innerText =
    `$${subtotal.toLocaleString()}`;

}

// =============================
// ELIMINAR PRODUCTO
// =============================

function eliminarProducto(index){

    let carrito =
    JSON.parse(
        localStorage.getItem("carrito")
    ) || [];

    carrito.splice(index,1);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    renderCarrito();

}

// =============================
// INICIAR
// =============================

actualizarContador();

renderCarrito();