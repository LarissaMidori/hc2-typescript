"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 25;
var nota = 8.6;
// String
var nome = 'Kate';
// Array
var idades = [56, 12, 85, 26];
var idades2 = [52, 18, 24, 36];
// Tuple
var jogadores;
jogadores = ['Liane', 'Marcos', 'Bia'];
var valores;
valores = ['Gabriela', 32, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any - usar com cautela, já que anula a tipagem
var retornoDaAPI = [123, 'Sofia', false];
var retornoDaAPI2 = {
//... monte de informação
};
// Void - usado para quando uma função não retorna nada (É pouco utilizado). Os 2 casos abaixos são a mesma coisa
function printarNatela(msg) {
    console.log(msg);
}
function printarNatela2(msg) {
    console.log(msg);
}
// Null e undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    //...
}
criar({
    propriedade: 1,
});
//criar('Keith') // Dá erro
// Never quase nunca é usado
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union type
var numero = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9  " + nota);
}
exibirNota(10);
exibirNota('8');
var funcionario = [
    {
        nome: 'Ryan',
        sobrenome: 'Whitaker',
        dataNascimento: new Date()
    },
    {
        nome: 'Hillary',
        sobrenome: 'Smith',
        dataNascimento: new Date()
    }
];
function tratarFuncionarios(funcionario) {
    for (var _i = 0, funcionario_1 = funcionario; _i < funcionario_1.length; _i++) {
        var funcionarios = funcionario_1[_i];
        console.log('Nome do funcionário:', funcionarios.nome);
    }
}
// Valores Nulos ou Opcionais
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Márcio',
    telefone1: '123456789',
    telefone2: '987456321'
};
// Type Assertion - Define o tipo de variável a partir daquele momento
var minhaIdade = 37;
minhaIdade.toString; //o as number faz com que o autocomplete funcione
// <number>minhaIdade.toString(); // outra forma de escrever
var input = document.getElementById("numero"); // como se fosse o casting do java
// const input = <HTMLInputElement>document.getElementById("numero");  // outra forma de escrever
console.log(input.value);
