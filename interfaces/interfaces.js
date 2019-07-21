"use strict";
/**
 * Aula 26 - Interfaces
 */
var aula26 = "Aula 26 - Interfaces";
console.log(aula26);
//está sendo exigido como parâmetro da função que o objeto passado tenha um atributo nome
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
const pessoa = {
    nome: "Othon",
    idade: 21,
    saudar(sobrenome) {
        console.log("Olá, meu nome é: " + this.nome + " " + sobrenome);
    }
};
function mudarNome(pessoa) {
    pessoa.nome = "Amanda";
}
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: "Othon Rafael", idade: 27, altura:1.80 })
pessoa.saudar("Skywalker");
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é: " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = (base, expoente) => Math.pow(base, expoente);
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
    c() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
