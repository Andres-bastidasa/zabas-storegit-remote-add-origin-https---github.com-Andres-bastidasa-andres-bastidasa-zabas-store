async function cargarComponentes() {

    // =========================
    // CARGAR NAVBAR
    // =========================

    const navbar =
    await fetch("./components/navbar.html");

    const navbarHTML =
    await navbar.text();

    document.getElementById(
    "navbar"
    ).innerHTML = navbarHTML;

    /* ========================= */
/* CARRITO LATERAL */
/* ========================= */

const carritoBtn =
document.querySelector(
".carrito-icono"
);

const carritoLateral =
document.getElementById(
"carritoLateral"
);

const overlayCarrito =
document.getElementById(
"overlayCarrito"
);

const cerrarCarrito =
document.getElementById(
"cerrarCarrito"
);

if(carritoBtn){

    carritoBtn.addEventListener(
    "click",
    (e)=>{

        e.preventDefault();

        carritoLateral.classList.add(
        "active"
        );

        overlayCarrito.classList.add(
        "active"
        );

    });

}

function cerrarPanel(){

    carritoLateral.classList.remove(
    "active"
    );

    overlayCarrito.classList.remove(
    "active"
    );

}

if(cerrarCarrito){

    cerrarCarrito.addEventListener(
    "click",
    cerrarPanel
    );

}

if(overlayCarrito){

    overlayCarrito.addEventListener(
    "click",
    cerrarPanel
    );

}

    // =========================
    // BUSCADOR NAVBAR
    // =========================

    const buscadorNavbar =
    document.getElementById(
    "buscadorNavbar"
    );

    if (buscadorNavbar) {

        buscadorNavbar.addEventListener(
        "keypress",
        (e) => {

            if (e.key === "Enter") {

                const texto =
                buscadorNavbar.value;

                window.location.href =
                `productos.html?buscar=${texto}`;

            }

        });

    }

    // =========================
    // CARGAR FOOTER
    // =========================

    const footerDiv =
    document.getElementById("footer");

    if (footerDiv) {

        const footer =
        await fetch("./components/footer.html");

        const footerHTML =
        await footer.text();

        footerDiv.innerHTML =
        footerHTML;

    }

    // =========================
    // MENU HAMBURGUESA
    // =========================

   const hamburguesa =
document.querySelector(".hamburguesa");

const menu =
document.querySelector(".menu");

if(hamburguesa){

    hamburguesa.addEventListener(
    "click",
    () => {

        menu.classList.toggle("active");

    });

}

    // =========================
    // ACTUALIZAR CONTADOR
    // =========================

    actualizarContador();

}

cargarComponentes();
setTimeout(()=>{

    if(typeof renderCarrito === "function"){

        renderCarrito();

    }

    if(typeof actualizarContador === "function"){

        actualizarContador();

    }

},200);