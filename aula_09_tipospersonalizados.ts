/**
 * Aula 09 - Tipos Personalizados
 */

var aula9 = "Aula 09 - Tipos Personalizados";
console.log(aula9);

type Funcionario = {
    supervisores:string[], 
    baterPonto: (horas:number) => string
}

var funcionario:Funcionario = {
    supervisores: ["Amanda", "Fernandes", "Fonseca"],
    baterPonto(horario:number):string{
        if(horario > 8){
            return "Fora do horário"
        }else{
            return "Ponto Normal"
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))