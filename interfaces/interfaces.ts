/**
 * Aula 26 - Interfaces
 */

var aula26 = "Aula 26 - Interfaces"
console.log(aula26)

interface Humano {
    nome: string
    idade?: number //? indica que é um atributo opcional
    [prop: string]:any //atributo dinâmico, poderá ter vários nomes
    saudar(sobrenome: string):void
}

//está sendo exigido como parâmetro da função que o objeto passado tenha um atributo nome
function saudarComOla(pessoa: Humano) {

    console.log("Olá, " + pessoa.nome)
}

const pessoa: Humano = {
    nome: "Othon",
    idade: 21,
    saudar(sobrenome: string){
        console.log("Olá, meu nome é: " + this.nome + " " + sobrenome)
    }
}

function mudarNome(pessoa: Humano) {

    pessoa.nome = "Amanda"
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({ nome: "Othon Rafael", idade: 27, altura:1.80 })
pessoa.saudar("Skywalker")

class Cliente implements Humano {

    nome: string = ""
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {

        console.log("Olá, meu nome é: " + this.nome + " " + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = "Han"
saudarComOla(meuCliente)
meuCliente.saudar("Solo")
console.log(meuCliente.ultimaCompra)

//Interfaces e Tipo Função

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = (base: number, expoente: number): number => base ** expoente

console.log(potencia(3,10))

//Herança com interface

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
    c(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}
