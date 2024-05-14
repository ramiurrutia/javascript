let primerNombre = prompt("Ingrese su nombre");

const EDAD = prompt("Ingrese su edad");

alert("Bienvenido " + primerNombre + "! Su edad es de " + EDAD + " años");

let anioDeNacimiento = 2024 - EDAD;

console.log(primerNombre + " nació en el año " + anioDeNacimiento);

if (EDAD => 18) {
    alert("Este usuario es mayor de edad");
} else {
    alert("Este usuario es menor de edad");
};
