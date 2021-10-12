
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

  abstract class AbstractABD implements A, B {
    a(): void { }
    b(): void { }

    abstract d(): void;

  }


  Object.prototype.log = function () {
    console.log(this.toString());
  }

  const e = 22;
  e.log()
}

// interface Ipessoa {
//   nome: string;
//   idade: number;

//   // métodos
//   dizerNome(nome: string): string {
//     return 'ola';
//   }
// }