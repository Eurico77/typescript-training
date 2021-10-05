class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public resumo(): string {
    return `${this.nome} custa R$${this.preco} (${this.desconto}% de desconto)`;
  }

  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(p1.resumo());
console.log(p2.resumo());
console.log(p1.precoComDesconto());
console.log(p2.precoComDesconto());