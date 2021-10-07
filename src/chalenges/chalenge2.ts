// desafio

type TContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

type TCorrentista = {
  nome: string;
  contaBancaria: TContaBancaria;
  contatos: string[];
};


let contaBancaria: TContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  }
};

let correntista: TCorrentista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
