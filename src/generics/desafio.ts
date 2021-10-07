class Fila<T> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  enqueue(elemento: T) {
    this.fila.push(elemento);
  }

  dequeue(): T {
    const [first] = this.fila;
    this.fila.splice(0, 1);
    return first;

  }

  imprimir(): void | T[] {
    console.log(this.fila);
  }
}

const fila = new Fila<string>(  'a', 'b', 'c'  );
fila.enqueue('d');
fila.imprimir();
fila.dequeue();
fila.imprimir();


