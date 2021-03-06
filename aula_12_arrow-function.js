"use strict";
/**
 * Aula 12 - Arrow Function
 */
var aula12 = "Aula 12 - Arrow Function";
console.log(aula12);
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const somar = (n1, n2) => {
    return n1 + n2;
};
console.log(somar(2, 3));
const falarCom = (pessoa) => console.log("Olá " + pessoa);
falarCom("Amanda");
function normalComThis() {
    console.log(this);
}
//O bind faz com que a referência this da função normalComThis seja o que for passado como parâmetro da função bind
const normalComThisEspecial = normalComThis.bind({ nome: "Othon" });
normalComThisEspecial();
