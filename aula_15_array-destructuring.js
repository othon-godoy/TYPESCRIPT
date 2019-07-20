"use strict";
/**
 * Aula 15 - Array Destructuring
 */
var aula15 = "Aula 15 - Array Destructuring";
console.log(aula15);
//Sem Array Destructuring
const caracteristcas = ['Motor Zetec 1.8', 2020];
/*
const motor = caracteristcas[0]
const ano   = caracteristcas[1]
*/
//Com Array Destructuring
const [motor, ano] = caracteristcas;
console.log(motor);
console.log(ano);
//Sem Array Destructurig
const item = {
    nome: "SSD 480GB",
    preco: 200,
    caracteristcas: {
        w: "Importado"
    }
};
/*
const nomeItem = item.nome
const precoItem = item.preco
*/
//Com Array Destructuring
const { nome: n, preco: p, caracteristcas: { w } } = item; //criando um alias para evitar conflito no nome de constantes ou variáveis já declaradas
console.log(n);
console.log(p);
console.log(w);
