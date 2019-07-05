"use strict";
/**
 * Aula 09 - Tipos Personalizados
 */
var aula9 = "Aula 09 - Tipos Personalizados";
console.log(aula9);
var funcionario = {
    supervisores: ["Amanda", "Fernandes", "Fonseca"],
    baterPonto: function (horario) {
        if (horario > 8) {
            return "Fora do horário";
        }
        else {
            return "Ponto Normal";
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
