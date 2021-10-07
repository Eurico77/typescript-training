// destruct(obj)

const { a, b, c } = { a: 1, b: 2, c: 3 };
console.log(a, b, c);


const myObj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name: nome, age: idade } = myObj;

console.log(nome, idade);