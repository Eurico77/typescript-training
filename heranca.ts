import { Carro } from "./modificadoresDeAcesso";

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-20);
  }

}

const f40 = new Ferrari('F40', 324);
console.log(f40);
f40.acelerar();
f40.acelerar();
f40.frear();