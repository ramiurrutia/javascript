let primerNombre = prompt("Ingrese su nombre");

let edad = prompt("Ingrese su edad");

alert("Bienvenido " + primerNombre + "! Su edad es de " + edad + " años");

let anioDeNacimiento = 2024 - edad;

console.log(primerNombre + " nació en el año " + anioDeNacimiento);

if (edad => 18) {
    alert("Este usuario es mayor de edad");
} else {
    alert("Este usuario es menor de edad");
};