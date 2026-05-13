async function cargarComponentes() {

    // =========================
    // CARGAR NAVBAR
    // =========================

    const navbar = await fetch("./components/navbar.html");
    const navbarHTML = await navbar.text();

    document.getElementById("navbar").innerHTML = navbarHTML;

    // =========================
    // CARGAR FOOTER
    // =========================

    const footerDiv = document.getElementById("footer");

    if(footerDiv){

        const footer = await fetch("./components/footer.html");
        const footerHTML = await footer.text();

        footerDiv.innerHTML = footerHTML;
    }

    // =========================
    // MENU HAMBURGUESA
    // =========================

    const hamburguesa = document.querySelector(".hamburguesa");

    if(hamburguesa){

        hamburguesa.addEventListener("click", toggleMenu);

    }

    // =========================
    // ACTUALIZAR CONTADOR
    // =========================

    actualizarContador();

}

cargarComponentes();