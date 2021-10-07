// classes abstratas
// classes abstratas são classes que não podem ser instanciadas, são usadas para definir interfaces
// classes abstratas são usadas para definir interfaces
// classes abstratas so podem ser herdadas por classes que estendem de ela
// classe abstract e interface são dois tipos de classes

abstract class Animal {
  abstract respirar(): void;
  andar(): void {
    throw new Error("deve ser implementado");
  };

  falar() {
    console.log("Animal falando...");
  }
}

class Cachorro extends Animal {
  respirar() {  
    console.log("Cachorro respirando...");
  }
  andar() {}
}

const cachorro = new Cachorro();
cachorro.respirar();
cachorro.andar();
cachorro.falar();

abstract class Pagamento {
  abstract pagar(): number;

  public getValorPago(): number {
    return this.pagar();
  }
}

class PagamentoCartao extends Pagamento {
  pagar() {
    return 123;
  }
}

class PagamentoBoleto extends Pagamento {
  pagar() {
    return 123;
  }
}

const pagamento: Pagamento = new PagamentoCartao();
console.log(pagamento.getValorPago());
const pagamento2 = new PagamentoBoleto();
console.log(pagamento2.getValorPago());