"use strict";
/**
 * Aula 14 - Rest e Spread
 */
var aula14 = "Aula 14 - Rest e Spread";
console.log(aula14);
const numbers = [1, 10, 99, -5];
//O Math.max não espera que seja recebido como parâmetro um array, dessa forma se quisessemos saber qual é o maior valor do array seria necessário separar em vários elementos, por exemplo:
//Math.max(numbers[0], numbers[1], numbers[2], numbers[3])
//Com os ... ele já faz isso e passa como parâmetros da função max cada elemento separadamente
//Spread - espalhar
console.log(Math.max(...numbers));
const turmaA = ["João", "Maria", "Fernanda"];
const turmaB = ["Fernando", "Miguel", "Lorena", ...turmaA];
console.log(turmaB);
//Rest - agrupar
//Também é útil quando se deseja um número dinâmico de parâmetros de uma função
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(...numbers);
console.log(numeros);
