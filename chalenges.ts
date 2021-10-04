const dobro = (num: number): number => num * 2;
console.log(dobro(10));


const dizerOla = (nome: string) => !nome ? {nome: 'Nome'} : console.log(`Ola ${nome}`);
dizerOla('João');

const nums = [-3, 33, 38, 10]
console.log(Math.min(...nums));

const arrays: number[] = [55, 20];
console.log(arrays, ...nums);




