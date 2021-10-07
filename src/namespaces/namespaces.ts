// namespaces
// namespace é um tipo de bloco de código que pode ser usado para agrupar classes, interfaces, funções, etc.
namespace Geometria {
  export namespace PI {


    const PI = 3.14;

    export function areaCirc(raio: number): number {
      return PI * raio * raio;
    }

    export function areaRet(base: number, altura: number): number {
      return base * altura;
    }

  }
}

export let raio: number = 5.4;

console.log(Geometria.PI.areaCirc(10));
// console.log(PI.areaRet(10, 20));