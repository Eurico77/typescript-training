interface MinhaFuncao {
  (nome: string, sobrenome: string): string;
}

let funcao: MinhaFuncao;
funcao = function (nome: string, sobrenome: string): string {
  return nome + ' ' + sobrenome;
}

console.log(funcao('João, ', 'Silva'));

const potencia = (base: number, expoente: number): number =>
  Array(expoente).fill(base).reduce((t, a) => t * a);

console.log(potencia(2, 10));
