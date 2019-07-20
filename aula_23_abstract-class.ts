/**
 * Aula 23 - Classe Abstrata
 */

var aula23 = "Aula 23 - Abstract Class"
console.log(aula23)

abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]):void

    getresultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo {

    executar(...numeros:number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplica extends Calculo {

    executar(...numeros:number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(1,2,3,4,5)
console.log(c1.getresultado())

let c2 = new Multiplica()
c2.executar(1,2,3,4,5)
console.log(c2.getresultado())