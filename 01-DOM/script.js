/* 

Nodo de documento 

Este nodo representa el documento completo de html que incluye el documento "raiz" (root) hasta los elementos hijos. 

Para acceder a este nodo usamos 👉🏻 Document

*/

console.log(document)
console.log(document.head)
console.log(document.title)
console.log(document.URL)
console.log(document.body)

/* 

Nodo elemento

Podemos seleccionar nodos de los elementos del HYML atraves de su etiqueta id o clase.

Sintaxis:

document.getElementByTagName("Nombre de etiqueta")

*/

let titulo = document.getElementsByTagName("h1")

console.log(titulo);
console.log(titulo[0]);
console.log(titulo[0].innerText);

let parrafos = document.getElementsByTagName("p");

console.log(parrafos);
console.log(parrafos[1].innerText)

/* 

Nodos de Atributos

Son los nodos que accedemos atraves de su clase o de su id

Sintaxis:

document.getElementById("id");
document.getElementByClassName("class")

*/

const contenedor = document.getElementsById("principal");
const titulin = document.getElementById("titulo");

console.log(contenedor);
console - log(titulin.innerText);

let cuchurrumina = document.getElementsByClassName("enlace")

console.log(cuchurrumin);
console.log(cuchurrumina[1].innerText)

let tituloLista = document.getElementsByClassName("bala")

console.log(lista);
console.log(lista[2].innerText)

