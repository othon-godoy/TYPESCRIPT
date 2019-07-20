"use strict";
/**
 * Aula 25 - Módulos
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aula25 = "Aula 25 - Módulos";
console.log(aula25);
//import { areaRetangulo } from './retangulo'
const retangulo_1 = __importDefault(require("./retangulo")); //para importar sem as chaves é necessário no arquivo de origem usar o export default
const retangulo_2 = __importDefault(require("./retangulo")); //utiliza o nome já como um alias
const circunferencia_1 = require("./circunferencia"); // também é possível utilizar um alias
console.log("Módulo Carregado");
console.log(retangulo_1.default(7, 8));
console.log(retangulo_2.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
