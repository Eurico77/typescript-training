// 
namespace NProduto {
  interface IProduto {
    nome?: string | undefined; // union type (string ou undefined) 
    preco: number; // ? indica que o atributo é opcional
    desconto: number;
    [propName: string]: any; // propriedade dinâmica

    // métodos
    calcularDesconto(): number;
  }

  function mostrarProduto(produto: IProduto) {
    console.log(produto.nome);
    console.log(produto.preco);
    console.log(produto.desconto);
  }

  const produto: IProduto = {
    nome: 'Notebook',
    preco: 2999,
    desconto: 0.2,
    calcularDesconto(): number {
      return this.preco * this.desconto ?? 0; // ? indica que o atributo é opcional
    }
  
  };

  mostrarProduto(produto);
  

}

// herança

namespace Heranca {
  
  interface A {
    a(): void;
  }

  interface B {
    b(): void;
  }

  interface C extends A, B {
    c(): void;
  }
}