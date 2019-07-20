/**
 * Aula 18 - Classes e Atributos
 */

var aula18 = "Aula 18 - Classes e Atributos"
console.log(aula18)

class Data {
    //Público por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(1, 1, 1990)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const namoro = new Data(1,11) //se não for passar parâmetros pode omitir os parenteses
console.log(namoro.dia)
console.log(namoro)

class DataEsperta {   

    constructor(
        public dia: number = 1, 
        public mes: number = 1, 
        public ano: number = 1970
    ){

    }
}

const aniversarioEsperto = new Data(1, 1, 1990)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const namoroEsperto = new Data(1,11) //se não for passar parâmetros pode omitir os parenteses
console.log(namoroEsperto.dia)
console.log(namoroEsperto)

class Produto{

    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ){
        this.precoComDesconto()
    }

    public resumo(): string {
        
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`
    }

    public precoComDesconto(): void {

        this.preco = this.preco * (1 - this.desconto)
    }
}

const mi9 = new Produto("Xiaomi Mi 9", 3000, 0.1)
const mimix = new Produto("Xiaomi Mi Mix", 3500, 0.1)

console.log(mi9)
console.log(mi9.resumo())
console.log(mi9.precoComDesconto())
console.log(mimix)
console.log(mimix.resumo())
console.log(mimix.precoComDesconto())