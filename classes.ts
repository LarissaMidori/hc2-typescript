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

// Utilizando Modificadores de Acesso
class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {}

    private alterarVelocidade(delta: number) {
        // FAÇO AS VALIDAÇÕES DE ACELERAÇÃO E FRENAGEM
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    }

    acelerar() {
        this.alterarVelocidade(5); 
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro('Nissan', 'March', 240);

// Herança

class Versa extends Carro {
    private turbo = false;

    constructor() {
        super('Nissan', 'Versa', 400);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const versa = new Versa();
versa.acelerar();
versa.frear();
versa.ligarTurbo();
