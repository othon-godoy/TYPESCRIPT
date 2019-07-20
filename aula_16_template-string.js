"use strict";
/**
 * Aula 16 - Template String
 */
var aula16 = "Aula 16 - Template String";
console.log(aula16);
const usuarioID = "SuporteCod3er";
const notificacoes = "15";
const boasVindas = `
Seja bem-vindo ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? "+9" : notificacoes}

`;
console.log(boasVindas);
