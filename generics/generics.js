"use strict";
/**
 * Aula 27 - Generics
 */
var aula27 = "Aula 27 - Generics";
console.log(aula27);
//Entre <T> é possível especificar o tipo que a função ou qualquer outro elemento deverá ter 
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(["Ana", "Bia", "Carlos"]);
imprimir([
    { nome: "Fulano", idade: 20 },
    { nome: "Beltrano", idade: 21 },
    { nome: "Cicrano", idade: 22 }
]);
imprimir([
    { nome: "Fulano", idade: 20 },
    { nome: "Beltrano", idade: 21 },
    { nome: "Cicrano", idade: 22 }
]);
//Classes e Generics
//Classe sem Generics
/*
class OperacaoBinaria {
    constructor(
        public operando1: any,
        public operando2: any)
    {}

    executar() {
        return this.operando1 + this.operando2
    }
}
*/
//Classes com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
//console.log(new OperacaoBinaria({}, {}).executar()) sem generics transformaria o objeto em uma string e concatenaria. Na maioria dos casos, não seria esse tipo de ação esperada porém o typescrit também não apontaria nenhum potencial erro
/*
console.log(new OperacaoBinaria("Bom ", "dia").executar())
console.log(new OperacaoBinaria(1, 2).executar())
console.log(new OperacaoBinaria("Bom ", 2).executar())
*/
console.log(new SomaBinaria(3, 4).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2); //Math.abs garante que independente de o primeiro numero ser maior ou menor que o segundo, o resultado será sempre positivo, ou seja, absoluto
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2028);
console.log(new DiferencaEntreDatas(d1, d2).executar());
//Desafio Fila
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Gui", "Pedro", "Ana", "Lu");
fila.imprimir();
fila.entrar("Othon");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
