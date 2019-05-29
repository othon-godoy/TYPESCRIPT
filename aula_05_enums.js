"use strict";
/**
 * Aula 05 - Enums
 */
var aula5 = "Aula 05 - Enums";
console.log(aula5);
var semana;
(function (semana) {
    semana[semana["Domingo"] = 0] = "Domingo";
    semana[semana["segunda"] = 1] = "segunda";
    semana[semana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
    semana[semana["Quarta"] = 3] = "Quarta";
    semana[semana["Quinta"] = 4] = "Quinta";
    semana[semana["Sexta"] = 5] = "Sexta";
    semana[semana["Sabado"] = 6] = "Sabado";
})(semana || (semana = {}));
var dia = semana.Domingo;
console.log(dia);
