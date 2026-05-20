/* ===================================== */
/* ELEMENTOS */
/* ===================================== */

const checkoutItems =
document.getElementById(
"checkoutItems"
);

const subtotalCheckout =
document.getElementById(
"subtotalCheckout"
);

const envioCheckout =
document.getElementById(
"envioCheckout"
);

const totalCheckout =
document.getElementById(
"totalCheckout"
);

const ciudadCliente =
document.getElementById(
"ciudadCliente"
);

const btnWhatsapp =
document.getElementById(
"btnWhatsapp"
);

/* ===================================== */
/* CARGAR CARRITO */
/* ===================================== */

let carrito =
JSON.parse(
localStorage.getItem("carrito")
) || [];

let subtotal = 0;

let envio = 0;

/* ===================================== */
/* RENDER PRODUCTOS */
/* ===================================== */

function renderCheckout(){

    checkoutItems.innerHTML = "";

    subtotal = 0;

    carrito.forEach(producto => {

        subtotal +=
        producto.precio *
        producto.cantidad;

        checkoutItems.innerHTML += `

        <div class="checkout-item">

            <img src="${producto.imagen}">

            <div class="checkout-item-info">

                <h4>
                    ${producto.nombre}
                </h4>

                <p>
                    $${(
                        producto.precio *
                        producto.cantidad
                    ).toLocaleString()}
                </p>

                <small>
                    Cantidad:
                    ${producto.cantidad}
                </small>

            </div>

        </div>

        `;

    });

    calcularEnvio();

}

/* ===================================== */
/* CALCULAR ENVIO */
/* ===================================== */

function calcularEnvio(){

    const ciudad =
    ciudadCliente.value;

    envio = 0;

    /* BOGOTA */

    if(ciudad === "Bogotá"){

        if(subtotal >= 69900){

            envio = 0;

        }else{

            envio = 10000;

        }

    }

    /* NACIONAL */

    else if(ciudad === "Nacional"){

        if(subtotal >= 249900){

            envio = 0;

        }else{

            envio = 18000;

        }

    }

    actualizarTotales();

}

/* ===================================== */
/* ACTUALIZAR TOTALES */
/* ===================================== */

function actualizarTotales(){

    subtotalCheckout.innerText =
    `$${subtotal.toLocaleString()}`;

    envioCheckout.innerText =

    envio === 0

    ? "GRATIS"

    : `$${envio.toLocaleString()}`;

    totalCheckout.innerText =

    `$${(
        subtotal + envio
    ).toLocaleString()}`;

}

/* ===================================== */
/* CAMBIO CIUDAD */
/* ===================================== */

ciudadCliente.addEventListener(
"change",
calcularEnvio
);

/* ===================================== */
/* WHATSAPP */
/* ===================================== */

btnWhatsapp.addEventListener(
"click",
()=>{

    const nombre =
    document.getElementById(
    "nombreCliente"
    ).value;

    const telefono =
    document.getElementById(
    "telefonoCliente"
    ).value;

    const ciudad =
    ciudadCliente.value;

    const direccion =
    document.getElementById(
    "direccionCliente"
    ).value;

    /* VALIDACION */

    if(
        nombre === "" ||
        telefono === "" ||
        ciudad === "" ||
        direccion === ""
    ){

        alert(
        "Completa todos los campos"
        );

        return;

    }

    let productosTexto = "";

    carrito.forEach(producto => {

        productosTexto +=

        `• ${producto.nombre}
Cantidad: ${producto.cantidad}
Subtotal: $${(
producto.precio *
producto.cantidad
).toLocaleString()}

`;

    });

    const mensaje = `

🛒 *PEDIDO ZABAS TACTICAL GEAR*

👤 Nombre:
${nombre}

📞 Teléfono:
${telefono}

📍 Ciudad:
${ciudad}

🏠 Dirección:
${direccion}

━━━━━━━━━━━━━━

${productosTexto}

💰 Subtotal:
$${subtotal.toLocaleString()}

🚚 Envío:
${envio === 0 ? "GRATIS" : "$" + envio.toLocaleString()}

🔥 TOTAL:
$${(
subtotal + envio
).toLocaleString()}

`;

    const url =

    `https://wa.me/573123785261?text=${encodeURIComponent(mensaje)}`;

    window.open(
    url,
    "_blank"
    );

});
/* ===================================== */
/* INICIAR */
/* ===================================== */

renderCheckout();