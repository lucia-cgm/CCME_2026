// MENU
// Abre el menu
function openMenu() {
  console.log("Función openMenu");
  document.getElementById("menu-hamburguesa").firstElementChild.lastElementChild.style.left ="0";
}
// CERRAR menu
function closeMenu() {
  console.log("Función closeMenu");
  document.getElementById("menu-hamburguesa").firstElementChild.lastElementChild.style.left ="-100%";
}



// VENTANA MODAL
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto";
}

function abrirModal(figure) {
  const modal = document.getElementById("modal");
  const modalImg = modal.querySelector(".m-img img");
  
  modalImg.src = figure.querySelector("img").src;
  
  // Mostrar ventana modal
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}



// CONTADOR
function actualizarContador() {
  const fechaObjetivo = new Date("2026-09-11T12:00:00");
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
}

actualizarContador();
setInterval(actualizarContador, 100)
