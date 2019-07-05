/**
 * Aula 08 - Desafio
 * 
 * Criar um objeto funcionário com:
 *  -- Array de strings com os nomes dos supervisores
 *  -- Função de bater ponto que recebe a hora (número) e retorna uma string
 *      -> Ponto normal (<= 8)
 *      -> Fora do horário (> 8)
 */

var aula8 = "Aula 08 - Desafio Objetos";
console.log(aula8);

var funcionario:{
    supervisores:string[], 
    baterPonto: (horas:number) => string
} = {
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




