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
    mostrarAmigos();
}

//Función que recorre el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); //Obtener la lista de amigos
    lista.innerHTML = ""; //Limpia la lista antes de agregar nuevos elementos
    //Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); //Para cada amigo, crear un nuevo elemento de lista
        li.textContent = amigos[i]; //Asignar el nombre del amigo al contenido del elemento de lista
        lista.appendChild(li);//Agregar el elemento de lista a la lista de amigos
    }
}

//Función que selecciona de manera aleatoria uno de los nombres almacenados en el array amigos. 
function sortearAmigo() {
    //Validar que haya amigos en la lista antes de seleccionar uno
    if (amigos.length === 0) {
        alert("No hay amigos para seleccionar."); // Si no hay amigos, mostrar un mensaje
    }else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);//Obtener un índice aleatorio
        //Ocultar lista de amigos
        document.getElementById("listaAmigos").style.display = "none";
        //Actualiza el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML.
        document.getElementById("resultado").innerHTML = "El amigo seleccionado es: " + amigos[indiceAleatorio];
    }
}

