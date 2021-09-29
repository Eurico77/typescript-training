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
  supervisoes: ['Administração', 'Gestão de Projetos', 'Gestão de Projetos'],
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


