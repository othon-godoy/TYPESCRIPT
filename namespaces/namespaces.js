"use strict";
/**
 * Aula 24 - Namespaces
 */
//<reference path="geometriaCirc.ts"/> inserir mais uma / para funcionar
//<reference path="geometriaRect.ts"/>
var aula24 = "Aula 24 - Namespaces";
console.log(aula24);
var Areas;
(function (Areas) {
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
//Namespaces aninhados
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
