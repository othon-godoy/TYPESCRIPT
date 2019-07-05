"use strict";
/**
 * Aula 05 - Enums
 */
var aula5 = "Aula 05 - Enums";
console.log(aula5);
var semana;
(function (semana) {
    semana[semana["Domingo"] = 1] = "Domingo";
    semana[semana["segunda"] = 2] = "segunda";
    semana[semana["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    semana[semana["Quarta"] = 4] = "Quarta";
    semana[semana["Quinta"] = 5] = "Quinta";
    semana[semana["Sexta"] = 6] = "Sexta";
    semana[semana["Sabado"] = 7] = "Sabado";
})(semana || (semana = {}));
var dia = semana.Domingo;
console.log(dia);
