// somente leitura
// somente leitura não pode ser alterada ou atribuida a uma variavel ou objeto 

// readonly
class Aviao {

    readonly prefixo: string;

    constructor(
        public readonly modelo: string,
        prefixo: string) {
        this.modelo = modelo;
        this.prefixo = prefixo;
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'; // não pode ser alterado
// turboHelice.prefixo = 'PT-DEF'; // não pode ser alterado
console.log(turboHelice);

