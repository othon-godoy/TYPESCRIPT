/**
 * Aula 25 - Módulos
 */

var aula25:string = "Aula 25 - Módulos"
console.log(aula25)

//import { areaRetangulo } from './retangulo'

import areaRetangulo from './retangulo' //para importar sem as chaves é necessário no arquivo de origem usar o export default

import retangulo from './retangulo' //utiliza o nome já como um alias

import { areaCircunferencia as circunferencia } from './circunferencia' // também é possível utilizar um alias

console.log("Módulo Carregado")
console.log(areaRetangulo(7,8))
console.log(retangulo(7,8))
console.log(circunferencia(2))