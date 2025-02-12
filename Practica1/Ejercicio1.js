/* Cálculo de Índice de Masa Corporal(IMC):

Escribe un programa que pregunte al usuario su peso en kilogramos y su altura en metros. 
Calcula el Índice de Masa Corporal (IMC) usando la fórmula IMC = peso / (altura * altura) y 
muestra la categoría correspondiente según el IMC (bajo peso, normal, sobrepeso, obesidad). (10 p) */


let peso = parseFloat(prompt("¿Cúanto es tu peso en kilogramos(kg)?: "));
let altura = parseFloat(prompt("¿Cúanto es tu altura en metros(m)?: "));
let imc = peso / (altura * altura);
imc= parseFloat(imc.toFixed(2));

if (imc < 18.5){
    alert("Bajo peso con un IMC de: " + imc);
}
else if (imc >=18.5 && imc<=24.9){
        alert("Estás en la categoría normal con un IMC de: " + imc);
}
else if (imc >=25 && imc < 29.9){
        alert("Estás en la categoría sobrepeso con un IMC de: " + imc);
}
else{
        alert("Estás en la categoría de obesidad con un IMC de: " + imc);
}