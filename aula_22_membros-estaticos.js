"use strict";
/**
 * Aula 22 - Membros Estáticos
 */
var aula22 = "Aula 22 - Getters e Setters";
console.log(aula22);
//Quando não faz sentido ter que instanciar uma classe para só então poder acessar atributos ou métodos que não estão diretamente relacionados com o objeto específico utiliza-se membros estáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * Math.pow(raio, 2);
    }
}
Matematica.PI = 3.1415;
console.log(Matematica.PI);
console.log(Matematica.areaCirc(4));
