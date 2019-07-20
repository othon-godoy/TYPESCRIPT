/**
 * Aula 24 - Namespaces
 */

//<reference path="geometriaCirc.ts"/> inserir mais uma / para funcionar
//<reference path="geometriaRect.ts"/>

var aula24 = "Aula 24 - Namespaces"
console.log(aula24)

namespace Areas{

    const PI = 3.14

    export function circunferencia(raio: number) {
        return PI * Math.pow(raio,2)
    }

    export function retangulo(base: number, altura: number): number {
        return base * altura
    }    
}

console.log(Areas.circunferencia(10)) 

console.log(Areas.retangulo(10, 20))

//Namespaces aninhados

console.log(Geometria.Area.circunferencia(10))

console.log(Geometria.Area.retangulo(10, 20))



