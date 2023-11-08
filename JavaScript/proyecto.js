const dialog = document.getElementById("miModal");
const botonMostrar = document.getElementById("btn-registrarse");
const botonCerrar = document.getElementById("botonCerrar");

function mostrarModal() {
    dialog.showModal();
};

function cerrarModal() {
    dialog.close();
};

botonMostrar.onclick = mostrarModal;
botonCerrar.onclick = cerrarModal;