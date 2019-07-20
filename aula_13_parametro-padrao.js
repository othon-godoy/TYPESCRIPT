"use strict";
/**
 * Aula 13 - Parâmetro Padrão
 */
var aula13 = "Aula 13 - Parâmetros Padrão";
console.log(aula13);
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(5);
