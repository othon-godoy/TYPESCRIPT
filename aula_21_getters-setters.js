"use strict";
/**
 * Aula 21 - Getters e Setters
 */
var aula21 = "Aula 21 - Getters e Setters";
console.log(aula21);
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3; //não seta o valor por conta da regra criada no set
console.log(pessoa1.idade);
