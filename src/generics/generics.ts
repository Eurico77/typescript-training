// generics <T> é um tipo genérico que pode ser usado para qualquer tipo.

// import { Data } from "../classes";

// T é um tipo genérico. T pode ser qualquer tipo. T pode ser string, number, boolean, etc.


function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<string>('Hello world');
log<number>(123);
log<boolean>(true);
log<any>({ name: 'John' });
log<any>(['John', 'Doe']);
log<any>(function () { });
log<any>(null);
log<any>(undefined);
log<any>(NaN);


// Exemplo de uso de generics

// array
const avaliacoes: Array<number> = [1, 2, 3, 4, 5];

function imprimirAvaliacoes<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

imprimirAvaliacoes<number>(avaliacoes);
imprimirAvaliacoes<string>(['Ana', 'Bia', 'Carlos']);
imprimirAvaliacoes<any>(['Ana', 'Bia', 'Carlos', 1, 2, 3]);

imprimirAvaliacoes<{ nome: string, idade: number }>(
  [{ nome: 'Ana', idade: 12 }, { nome: 'Bia', idade: 34 }]);

// exemplo de uso de generics com tipos genéricos


type Aluno = { nome: string, idade: number };

imprimirAvaliacoes<Aluno>(
  [{ nome: 'Ana', idade: 12 }, { nome: 'Bia', idade: 34 }]);

// Tipo genérico com tipo genérico
const echo = (data: any): any => console.log(data);

type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echo;

chamarEcho<string>('123');


// class

abstract class OperacaoBinaria<T, R> {
  constructor(
    public operador1: T,
    public operador2: T,

  ) { }

  abstract executar(): R // abstract é um método abstrato.
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operador1 + this.operador2;
  }
}

// const soma = new SomaBinaria(1, 2);
// console.log(soma.executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
    const t1 = this.getTime(this.operador1);
    const t2 = this.getTime(this.operador2);

    const diferenca = Math.abs(t1 - t2);
    const dia = 1000 * 60 * 60 * 24;

    return `${Math.ceil(diferenca / dia)} dia(s)`;
  }
}

const d1 = new Data(1, 2, 2020);
const d2 = new Data(2, 2, 2020);

const diferenca = new DiferencaEntreDatas(
  d1,
  d2

).executar();

console.log(diferenca);