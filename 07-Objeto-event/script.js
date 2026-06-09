/* 

Objet Event (e)

es la representación de un suceso que ocurre en el navegador como: un click, pulsar una tecla, movimiento del mous.

Este objeto nos proporciona info. sobre las propiedades y metodos para manipularlo.

Para acceder al objeto event se pasa como argumentode la funcion manejadora (handler).

Sintaxis:

function handlre(e) {
// Codigo que se ejecutara
console.log(e)
}

Algunas de las propiedades del objeto evento:

type👉devuelve el tipo de evento
target👉elemento donde ocurre el evento
timeStamp👉la marca tiempo en milisegundos desde la varga de la pagina.

code👉codigo de la tecla presionada
key👉valor de la tecla presionada

clientX👉la posición horizontal del puntero del mouse en relación a la ventana del navegador
clientY👉la posición vertical del puntero del mouse en relación a la ventana del navegador

*/

// Traemos ele elemento de referencia (Traigamos algo al JS)

const button = document.getElementById('click');

// Manejar el evento 

button.addEventListener('click', mostrarEvento);

// Definir la función

function mostrarEvento(event) {
  // Codigo que ejecuta la función 
  console.log(event)

  // Accedemos a las propiedades del objeto evento

  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.target.innerText)
}

// Eventos de teclas

document.addEventListener('keydown', function (e) {
  // Codigo que se ejecuta

});

// Eventos del Mouse

document.addEventListener('mousemove', (e) => {
  // Codigo que se ejecuta

  //console.log(e)
 //console.log(e.type)
 // console.log(e.code)
 // console.log(e.key)
 // console.log(e.clientY)
  
  let coordenadas = `Las coordenadas de mi mouse de X: ${e.clientX} y de Y: ${e.clientY}✨`;
  console.log(coordenadas);
});






