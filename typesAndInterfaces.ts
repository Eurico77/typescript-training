// types é um tipo de dados, e interfaces são tipos de dados
// a diferença é que interfaces são mais flexíveis, e tipos são mais estáticos

type User = {
  name: string;
  age: number;
};

type User = {
  surname: string;
}

const user: User = {
  name: "Diego",
  age: 27,
  
};

interface UserInterface {
  name: string;
  age: number;
}

interface UserInterface {
  surname: string;
}

const userInterface: UserInterface = {
  name: "Diego",
  age: 27,
  surname: "Santos",
};