/**
 * Aula 19 - Modificadores de Acesso
 */

var aula19 = "Aula 19 - Modificadores de Acesso"
console.log(aula19)

class Carro{
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private    velocidadeMaxima: number = 200) {


    }

    protected alterarVelocidade(delta: number): number {

        const novaVelocidade = this.velocidadeAtual + delta

        const velocidadeValida = novaVelocidade >= 0  && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida) {

            this.velocidadeAtual = novaVelocidade

        }else{

            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0

        }

        return this.velocidadeAtual
    }

    public acelerar(): number  {

        return this.alterarVelocidade(5)
    }

    public frenar(): number {

        return this.alterarVelocidade(-5)
    }    
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(15).fill(0).forEach(() => carro1.frenar())
console.log(carro1.frenar())