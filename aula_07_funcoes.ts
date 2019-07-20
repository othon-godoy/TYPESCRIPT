/**
 * Aula 07 - Funções
 */

 var aula7:string = "Aula 07 - Funções"
 console.log(aula7)

 function retornaAula():string{ 
     return aula7
 }

 console.log(retornaAula())

 function digaOi():void{
    console.log('Oi')
 }

 digaOi()

 function multiplicar(nA:number, nB:number):number{
    return nA * nB
 }

 console.log(multiplicar(5,9))

 /*
 const func = function(a:number, b:number):boolean{
    return false
 }
 */
 