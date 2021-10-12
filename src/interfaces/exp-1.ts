interface Human {
  name: string;
  age: number;

  greet(phrase: string): void;
}

class Person implements Human {

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

const person = new Person("Max", 30);
console.log(person);