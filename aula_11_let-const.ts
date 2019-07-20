/**
 * Aula 11 - Let e Const
 */

var aula11 = "Aula 11 - Let e Const"
console.log(aula11)

//Ao executar o código abaixo o resultado no console será undefined. Mesmo tentando exibir a variável 'seraQuePode' antes de ter sido criada, não ocorre erro graças ao içamento de variáveis que é uma característica do JavaScript

/*
console.log(seraQuePode)
var seraQuePode = '?'
*/

//A execução do código acima será entendido da seguinte maneira

var seraQuePodeA
console.log(seraQuePodeA)
seraQuePodeA = '?'

//Como ja é sabido, o let e const respeitam o escopo de onde a variável se encontra, porém como está configurado no tsconfig para que ocorra um transpiling para o ES5, o arquivo JavaScript gerado substituirá o let e o const para var, numa tentativa de manter a compatibilidade do código com todos os navegadores, até mesmo os mais antigos, de modo que o erro ainda irá ocorrer

//Para resolver isso, o transpiling deverá ser para o ES6, que já possui recursos para entender o let e const e respeitar o escopo