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
