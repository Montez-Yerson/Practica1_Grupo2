/* En este ejercicio, tendrán total libertad para elegir la problemática y 
la mejor solución. Cada grupo podrá decidir su propio enfoque y 
desarrollar el software según sus criterios. 
El grupo que presente la mejor solución será el único en recibir los 60 puntos asignados a esta pregunta. 
¡Buena suerte! */


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularCostoPalta(javas, primera, segunda, tercera, precioPrimera, precioSegunda, precioTercera, descuentoJava) {
    let pesoPorJava = 24;
    let pesoNetoPrimera = (pesoPorJava - descuentoJava) * primera;
    let pesoNetoSegunda = (pesoPorJava - descuentoJava) * segunda;
    let pesoNetoTercera = (pesoPorJava - descuentoJava) * tercera;

    let costoPrimera = pesoNetoPrimera * precioPrimera;
    let costoSegunda = pesoNetoSegunda * precioSegunda;
    let costoTercera = pesoNetoTercera * precioTercera;

    let costoTotal = costoPrimera + costoSegunda + costoTercera;

    return {
        pesoTotal: pesoNetoPrimera + pesoNetoSegunda + pesoNetoTercera,
        costoTotal: costoTotal
    };
}

rl.question('Ingrese el número de javas: ', (javas) => {
    rl.question('Ingrese la cantidad de javas de primera calidad: ', (primera) => {
        rl.question('Ingrese la cantidad de javas de segunda calidad: ', (segunda) => {
            rl.question('Ingrese la cantidad de javas de tercera calidad: ', (tercera) => {
                rl.question('Ingrese el precio por kilo de la primera calidad: ', (precioPrimera) => {
                    rl.question('Ingrese el precio por kilo de la segunda calidad: ', (precioSegunda) => {
                        rl.question('Ingrese el precio por kilo de la tercera calidad: ', (precioTercera) => {
                            rl.question('Ingrese el descuento por java en kilos: ', (descuentoJava) => {
                                let resultado = calcularCostoPalta(
                                    parseFloat(javas), 
                                    parseFloat(primera), 
                                    parseFloat(segunda), 
                                    parseFloat(tercera), 
                                    parseFloat(precioPrimera), 
                                    parseFloat(precioSegunda), 
                                    parseFloat(precioTercera), 
                                    parseFloat(descuentoJava)
                                );
                                console.log(`Peso total neto: ${resultado.pesoTotal.toFixed(2)} kg`);
                                console.log(`Costo total de la compra: S/ ${resultado.costoTotal.toFixed(2)}`);
                                rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
});