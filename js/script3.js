// let nombre = "Ramiro";

// const PI = 3.141;

// let esMayorDeEdad = true;

// let edadUsuario = prompt("Ingrese su edad");

// alert("Hola!");

// console.log("La edad del usuario es: " + edadUsuario);

// if(edadUsuario > 0) {
//     console.log("Edad ingresada correctamente");
// } else {
//     console.log("La edad no es valida");
// };

// let numero = prompt("Ingrese un número");

// if(numero % 2 == 0) {
//     console.log("El número es par");
// } else if (numero % 1 == 0){
//     console.log("El número es impar");
// } else {
//     console.log("El número no es valido");
// }

    
// if (numero > 100) {
//     console.log("El numero ingresado mayor a 100");
// } else if (numero < 100) {
//     console.log("El número es menor a 100");
// } else if (numero == 100){
//     console.log("El numero es igual a 100");
// } else {
//     console.log("El número registrado no es válido");
// };

let numeroNuevo = prompt("Ingrese un número");

if (numeroNuevo % 2 == 0) {
    console.log("Este numero es divisible por 2");
} else {
    console.log("Este numero no es divisible por 2");
};

if (numeroNuevo % 3 == 0) {
    console.log("Este numero es divisible por 3");
} else {
    console.log("Este numero no es divisible por 3");
};

if (numeroNuevo > 0 && numeroNuevo < 100) {
    console.log("El número es mayor que 0 y menor que 100")
} else {
    console.log("El numero no cumple con las condiciones :D")
}

if (numeroNuevo >= 10) {
    console.log("El número es mayor a 10")
} else if (numeroNuevo <= -10) {
    console.log("El numero es menor que -10")
} else {
    console.log("No cumple con ninguno de los requisitos")
}