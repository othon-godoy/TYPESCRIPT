"use strict";
/**
 * Aula 17 - Promises
 */
var aula17 = "Aula 17 - Promises";
console.log(aula17);
//Para fazer funcionar um assincronísmo, em JavaScrit era necessário a utilização de uma função Callback
//Sem Promises
/*
function esperar3s(Callback: (dado:string) => void) {

    setTimeout(() => {

        Callback("3s depois...")

    }, 3000)
}

esperar3s(function(resultado:string){
    console.log(resultado)
})
*/
//Com Promises
/*
function esperar4sPromise() {

    return new Promise((resolve:any) => {

        setTimeout(() => {

            resolve("4s depois Promise...")
    
        }, 4000)
    })
}

esperar4sPromise().then(dado => console.log(dado))

fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilms => resFilms.json())
    .then(film => console.log(film))
    .catch(res => console.log("Catch!!!"))
*/ 
