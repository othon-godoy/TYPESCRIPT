"use strict";
/**
 * Aula 18 - Classes e Atributos
 */
var aula18 = "Aula 18 - Classes e Atributos";
console.log(aula18);
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(1, 1, 1990);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const namoro = new Data(1, 11); //se não for passar parâmetros pode omitir os parenteses
console.log(namoro.dia);
console.log(namoro);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new Data(1, 1, 1990);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const namoroEsperto = new Data(1, 11); //se não for passar parâmetros pode omitir os parenteses
console.log(namoroEsperto.dia);
console.log(namoroEsperto);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.precoComDesconto();
    }
    resumo() {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`;
    }
    precoComDesconto() {
        this.preco = this.preco * (1 - this.desconto);
    }
}
const mi9 = new Produto("Xiaomi Mi 9", 3000, 0.1);
const mimix = new Produto("Xiaomi Mi Mix", 3500, 0.1);
console.log(mi9);
console.log(mi9.resumo());
console.log(mi9.precoComDesconto());
console.log(mimix);
console.log(mimix.resumo());
console.log(mimix.precoComDesconto());
