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