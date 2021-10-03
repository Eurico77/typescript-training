// desafio

/* 
  * @description: Criar um objeto funcionario com
  - Arrays de strings com os momes dos supervisoes
  - Arrays de inteiros com os anos de contratação
  - Funcao de bater o ponto que recebe a hora e retorna
  uma string
  -> Ponto normal(<=8)
  -> Fora do horario(>8)

*/

type Funcionario = {
  nome: string;
  supervisoes: string[];
  anosDeContratação: number[];
  baterPonto(hora: number): string;
}

const funcionario: Funcionario = {
  nome: 'Joãzinho',
  supervisoes: ['Administração', 'Gestão de Projetos', 'Gestão de rh'],
  anosDeContratação: [2016, 2017, 2018],
  baterPonto(hora: number): string {

    if (hora <= 8) {
      return 'Ponto normal';
    } else {
      return 'Fora do horario';
    }
  }
}

console.log(funcionario.baterPonto(10));


// union types

let nota: number | string;

nota = 10;
console.log(nota);
nota = '10';
console.log(nota);


//  tipo never

const falha = (msg: string): never => {
  throw new Error(msg);
}

const produto = {
  nome: 'Sabão',
  preco: -1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length === 0) {
      falha('Precisa ter um nome');
    }
    if (this.preco <= 0) {
      falha('Preço inválido');
    }
  }
}

produto.validarProduto();
