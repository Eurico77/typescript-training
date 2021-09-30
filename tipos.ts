const tipo : number = 1;

console.log(tipo);

let idade = 22;

// idade = "22";
console.log(idade);

let minhaIdade;
minhaIdade = 22;

console.log(typeof minhaIdade);


// hobbys
const array = ["futebol", "basquete", "natação"];
console.log(array);

const hobbies: string[] = ["futebol", "basquete", "natação"];
console.log(hobbies);

//  tuplas
const tuple: [string, number] = ["futebol", 22];
console.log(tuple);

// enums
enum Tipo { 
    FUTEBOL, BASQUETE, NATACAO
}

let tipor: Tipo = Tipo.FUTEBOL;
console.log(tipor);

// anny 

const carro: any = {
    cor: "azul",
    velocidade: 120
};

// funcoes

const sayHello = (nome: string) => {
    console.log(`Olá ${nome}`);
}


sayHello("Fulano");

const multiplicar = (numero1: number, numero2: number): number => {
  return numero1 * numero2;

}

console.log(multiplicar(2, 3));

interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

// objetos

let usuario: Usuario = {
  nome : "Fulano",
  idade : 22,
  email : "jakdajkdakjdksajksd"
};


const a = {};
