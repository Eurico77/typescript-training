// classes abstratas
// classes abstratas são classes que não podem ser instanciadas, são usadas para definir interfaces
// classes abstratas são usadas para definir interfaces
// classes abstratas so podem ser herdadas por classes que estendem de ela

abstract class Animal {
  abstract respirar(): void;
  abstract andar(): void;

  falar() {
    console.log("Animal falando...");
  }
}

class Cachorro extends Animal {
  respirar() {  
    console.log("Cachorro respirando...");
  }
  andar() {
    console.log("Cachorro andando...");
  }
}

const cachorro = new Cachorro();
cachorro.respirar();
cachorro.andar();
cachorro.falar();