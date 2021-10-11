class Data {
  // atributos ou propriedades da classe
  // public dia: number;

  
  // constructor é um método que é executado automaticamente quando a classe é instanciada
  // ou seja, quando a classe é criada
  // o constructor é um método que recebe parâmetros
  constructor(public dia: number, public mes: number, public ano: number) {
  }


  // comportamento ou método
  formatada(): string {
    return `${this.dia}/${this.mes}/${this.ano}`;
  }

  getDia(): number {
    return this.dia;
  }

  getMes(): number {
    return this.mes;
  }

  getAno(): number {
    return this.ano;
  }

  setDia(dia: number): void {
    this.dia = dia;
  }
}

const aniversario = new Data(1, 1, 2020);
console.log(aniversario.formatada());

