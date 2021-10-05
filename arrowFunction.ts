const sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2));


const falarCom = (pessoa: { nome: string; }): void => {
  console.log(pessoa.nome);
}

falarCom({ nome: 'João' });

