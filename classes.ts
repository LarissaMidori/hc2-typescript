class Data {
    public dia: number;
    mes: number;
    ano: number; // se não colocar nada, já fica public por padrão

    constructor(dia: number, mes: number, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);

const data2 = new Data(1, 1); // vai receber o ano 1970 por padrão


// usando modificador no construtor
class Data2 {
    constructor(public dia: number, public mes: number, public ano: number = 1970) {

    }
}

const data3 = new Data2(2, 2, 2021);