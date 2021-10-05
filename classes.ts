class Data {
  constructor(public dia: number, public mes: number, public ano: number) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

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

