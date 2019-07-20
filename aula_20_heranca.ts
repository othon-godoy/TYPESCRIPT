/**
 * Aula 20 - Herança
 */

var aula20 = "Aula 20 - Herança"
console.log(aula20)

class Ferrari extends Carro{

    constructor(modelo: string, velocidadeMaxima: number) {
        super("Ferrari", modelo, velocidadeMaxima)
    }

    public acelerar():number {

        super.acelerar()

        return this.alterarVelocidade(20)
    }

    public frenar():number {

        super.frenar()

        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari("F40", 324)
console.log(`Marca: ${f40.marca}
Modelo: ${f40.modelo}
`)


Array(50).fill(0).forEach(() => f40.acelerar())
console.log(f40.acelerar())

Array(10).fill(0).forEach(() => f40.frenar())
console.log(f40.frenar())