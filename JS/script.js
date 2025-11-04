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



// CALCULO DEL COSTE TOTAL
function costeTotal() {
  // NUMERO DE ENTRADAS
  var numero = document.getElementById("numero").value;

  // ACTIVIDAD SELECCIONADA
  var actividad = document.getElementById("actividad").value;

  console.log("Numero de entradas: " + numero);
  console.log("Actividad seleccionada: " + actividad);
    
  // CALCULO DEL PRECIO
  var precio = 0;

  // Para cada valor de actividad, se ajusta un caso u otro. ES COMO UN IF
  switch(actividad) {
    // case "value q as puesto en el HTML"
    case "a1":
      precio = 70;
      break;
    case "a2":
      precio = 38;
      break;
  }
  console.log("Precio por entrada: " + precio);

  // Multiplicar el precio de cada entrada + el nº de entradas
  var precioTotal = numero * precio;

  console.log("Precio total: " + precioTotal);

  document.getElementById("coste").innerHTML = precioTotal + "&euro;";
}


// Presenta la VENTANA MODAL al enviar el formulario
function comprar() {
  // Informacion que ha rellenado el formulario
  var nombre = document.getElementById("nombre").value;
  var nombre = document.getElementById("apellidos").value;
  var correo = document.getElementById("correo").value;
  var actividad = document.getElementById("actividad").value;
  var entradas = document.getElementById("numero").value;
  // innerHTML pq es un numeroqe ecribe el programa
  var coste = document.getElementById("coste").innerHTML;


  // PONER x ACTIVIDADES (CONCIERTO, ..)
  var nombreActividad = "";
  switch(actividad) {
    case "a1":
      nombreActividad = "Abono días - 11 y 12 de septiembreo";
      break;
    case "a2":
      nombreActividad = "Entrada única - días 11 o 12 de septiembre";
      break;
  }


  console.log("Nombre: " + nombre);
  console.log("Apellidos: " + apellidos);
  console.log("Correo: " + correo);
  console.log("Actividad: " + nombreActividad);
  console.log("Número de entradas: " + entradas);
  console.log("Coste: " + coste);

  // Presentamos la informacion en la ventana modal
  document.getElementById("n").innerHTML = nombre;
  document.getElementById("ap").innerHTML = apellidos;
  document.getElementById("c").innerHTML = correo;
  document.getElementById("a").innerHTML = nombreActividad;
  document.getElementById("nu").innerHTML = entradas;
  document.getElementById("ct").innerHTML = coste;

  // MOSTRAR VENTANA MODAL
  document.getElementById("modal-entradas").style.display = "flex";


  // Última linea de nuestra función: para evitar que se recargue la página cuando envías el formulario
    return false;
  
}


// CERRAR VENTANA MODAL
function cerrarVentana() {
  document.getElementById("modal-entradas").style.display = "none";
}



// CONTADOR
const targetDate = new Date('April 11, 2026 00:00:00').getTime();
        
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;
            
  // Contador de días restantes
  const dias = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const horas = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            
  // Actualizar los valores en pantalla
  document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
  document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
  document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
}
        
// Actualizar el contador cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);