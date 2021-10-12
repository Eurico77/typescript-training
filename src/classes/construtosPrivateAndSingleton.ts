// construtor privado
// construtor privado é um construtor que não pode ser instanciado
// por fora da classe

// singleton é um construtor que só pode ser instanciado uma vez e 
// a instancia é retornada sempre que for chamado o construtor 

// construtor privado
class Connection {
  private static instance: Connection; 

  private constructor() {}

  static getInstance(): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }
    return Connection.instance;
  } 

  public someMethod(): string {
    return `someMethod ${new Date}`;
  }
}

const instanceA = Connection.getInstance();
const instanceB = Connection.getInstance();

console.log(instanceA.someMethod());
console.log(instanceB.someMethod());