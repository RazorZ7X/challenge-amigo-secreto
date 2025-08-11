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
}

