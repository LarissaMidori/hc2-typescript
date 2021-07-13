// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 25;
const nota: number = 8.6;

// String
const nome: string = 'Kate';

// Array
const idades: number[] =  [56, 12, 85, 26];
const idades2: Array<number> = [52, 18, 24, 36];

// Tuple
let jogadores: [string, string, string];
jogadores = ['Liane', 'Marcos', 'Bia'];

let valores: [string, number, boolean];
valores = ['Gabriela', 32, true];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any - usar com cautela, já que anula a tipagem
const retornoDaAPI: any[] = [123, 'Sofia', false];
const retornoDaAPI2: any = {
    //... monte de informação
}

// Void - usado para quando uma função não retorna nada (É pouco utilizado). Os 2 casos abaixos são a mesma coisa
function printarNatela(msg:string) {
    console.log(msg);
}

function printarNatela2(msg:string) : void {
    console.log(msg);
}

// Null e undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //...
}
criar({
    propriedade: 1,
})
//criar('Keith') // Dá erro

// Never quase nunca é usado
function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem:string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Algo falhou');
}

// Union type

const numero: string | number = 5;

function exibirNota(nota: number | string) {
    console.log(`A nota é  ${nota}`);
}
exibirNota (10);
exibirNota ('8');

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

const funcionario: Funcionario[] = [
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

function tratarFuncionarios(funcionario:Funcionario[]) {
    for(let funcionarios of funcionario) {
        console.log('Nome do funcionário:' , funcionarios.nome)
    }
}

// Valores Nulos ou Opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; // ? mostra que o valor é opcional
}

const contato: Contato = {
    nome: 'Márcio',
    telefone1: '123456789',
    telefone2: '987456321'
}

// Type Assertion - Define o tipo de variável a partir daquele momento
const minhaIdade: any = 37;
(minhaIdade as number).toString; //o as number faz com que o autocomplete funcione
// <number>minhaIdade.toString(); // outra forma de escrever

const input = document.getElementById("numero") as HTMLInputElement; // como se fosse o casting do java
// const input = <HTMLInputElement>document.getElementById("numero");  // outra forma de escrever
console.log(input.value);