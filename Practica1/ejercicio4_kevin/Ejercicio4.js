/* Escribe un programa que pregunte al usuario el total de su compra y si tiene un código de descuento. 
Si el código es "DESCUENTO10", se aplicará un 10% de descuento. Si el código es "DESCUENTO20", 
se aplicará un 20% de descuento. Muestra el total después de aplicar el descuento, si corresponde, 
y un mensaje si el código no es válido. (10p) */

let total = parseInt(prompt("Introduce el total de tu compra: "));
let codigo = prompt("Introduce tu código de descuento: ");
let descuento = 0;
if (codigo == "DESCUENTO10") {
    descuento = 0.10;
} else if (codigo == "DESCUENTO20") {
    descuento = 0.20;
} else {
    alert("Código no válido");
}   
let totalDescuento = total - total * descuento;
alert("Total después de aplicar el descuento: " + totalDescuento);
