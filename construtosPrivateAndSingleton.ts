// construtor privado
// construtor privado é um construtor que não pode ser instanciado
// por fora da classe

// construtor privado
class Singleton {
  private static instance: Singleton; 

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  } 

  public someMethod(): string {
    return `someMethod ${new Date}`;
  }
}

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA.someMethod());
console.log(instanceB.someMethod());