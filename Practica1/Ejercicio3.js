/* Los tramos del IVA en un país son los siguientes:

Básico: 10%
Reducido: 5%
Superreducido: 2%
Escribe un programa que pregunte al usuario el importe de una compra y el tipo de IVA aplicado 
(básico, reducido, superreducido) y muestre por pantalla el total con IVA incluido. (10p) */


const readlineSync = require('readline-sync');

const DATOS = {
    "basico": 0.10,
    "reducido": 0.05,
    "superreducido": 0.02
};

let importe = parseFloat(readlineSync.question("Importe de la compra: "));
let tipoIVA = readlineSync.question("Tipo de, IVA (basico, reducido, superreducido): ").toLowerCase();

if (DATOS[tipoIVA] !== undefined) {
    let iva = importe * DATOS[tipoIVA];
    let total = importe + iva;
    console.log(`Importe sin IVA: ${importe.toFixed(2)} €`);
    console.log(`IVA (${tipoIVA}): ${iva.toFixed(2)} €`);
    console.log(`Total con IVA: ${total.toFixed(2)} €`);
} else {
    console.log("Error: Tipo de IVA no válido.");
}