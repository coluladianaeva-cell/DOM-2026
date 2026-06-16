// Referencia del emoji cursor

const cursor = document.querySelector('.cursor');

// Detectamos el eveneto del movimiento del mouse

document.addEventListener('mousemove', (e) => {
  // Codigo que se ejecuta 
  //console.log(e.clientY);

  // Guardar los datos de las coordenadas del mouse en variables

  let mouseX = e.clientX
  let mouseY = e.clientY

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;

})

// Detectar el evento de presionar una tecla

document.addEventListener('keydown', (e) => {
  // Codigo que se ejecuta
 // console.log(e.key)

 switch (e.key) {
  // Casos 
  case '1': 
   cursor.innerText = '❤';
   document.body.style.backgroundColor = 'rgba(238, 131, 223, 0.87)'
   break;
  case '2': 
   cursor.innerText = '✨';
   document.body.style.backgroundColor = 'rgba(251, 49, 76, 0.87)'
   break;
  case '3':
    cursor.innerText = '💋'; 
    document.body.style.backgroundColor = 'rgba(110, 81, 230, 0.87)'
    break;
  case '4':
    cursor.innerText = '🌹';
    document.body.style.backgroundColor = 'rgba(48, 63, 236, 0.87)'
    break;
  default:
    cursor.innerText = '👍';
    document.body.style.backgroundColor = 'rgba(240, 124, 58, 0.87)'
    break;
 }
})