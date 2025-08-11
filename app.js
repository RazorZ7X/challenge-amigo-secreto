// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variable de tipo array, que almacenará los nombres de los amigos ingresados
let amigos = [];

//Función que permite al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente
function agregarAmigo() {
    //Obtener el valor del input
    let input = document.getElementById("amigo").value;
    //Validar que el campo no esté vacío
    if (input === "") {
        alert("Por favor, ingresa un nombre.");
    } else {
        //Agregar el nombre al array de amigos
        amigos.push(input);
    }
    //Limpiar el campo de texto
    document.getElementById("amigo").value = "";
    console.log(amigos);
    mostrarAmigos();
}

//Función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    //Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); //Para cada amigo, crear un nuevo elemento de lista
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}



