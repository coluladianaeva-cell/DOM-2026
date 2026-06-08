/* 

Eventos:

Es una acción o suceso que ocurre en el navegador o un elemento del DOM.
Pueden ser inciadospor los usuarios o tambien por el sistema. Los eventos pueden ser "manejados" por JS.

+ Manejar eventos con JS 

1. Target (objetivo blanco)

Es el elemento del DOM, en el que ha ocurrido el evento. El target se va a encontrar dentro de un objeto llamado "evento" (event) y podemoos acceder a este objeto mediante la propiedad "event.target" 

2. Event Listener (escuchador de evento)

Es el "oido" que esta antento a que ocurre el evento en el elemento o en el objetivo (target) en especifico.

3. Trigger (Disparado o desencadenante)

Es el que desencadena en el evento ocurra. 
Es la accion que realiza el usuario o el sitema para activar el evento 

  + Hacer click
  + Mover el ratón
  + tippear teclas 
  
4. Event Handler (manejador de eventos)

Es una funcion que se ejecuta cada que ocurre el trigger. Con JS se le dice que se va a ejecutar cuando este evento ocuura. 

 + Mostrar un msj
 + Cambiar color 
 + Agregar un elemento 
 + Lanzar una alerta 
 
5. Sintaxis

 target.eventlistener(trigger y el event Handler)
 
 Target👉 elemento donde ocurre el evento
 listener👉 escucha y detecta el evento
 trigger👉 acción que ocurre en el evento
 handler👉 función que se ejecuta cuando ocurre el evento 
 */

 // Traemos el boton JS 

 const botoncito = document.getElementById("botoncito");

 // Manejar el evento 

 botoncito.addEventListener('click', mostrarMensaje);

 // Definir la funcion externa 

 function mostrarMensaje() {
  // Codigo que se ejecutara al llamar a la funcion alert
  ("Ya vamonos porfavor");
 }



































