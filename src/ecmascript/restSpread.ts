// rest operator 
// rest operator is used to represent the remaining items of an array

const rest = (arg1: any, ...args: number[]) => {
  console.log('rest', arg1, args);
}

rest(1, 2, 3, 4, 5);

const spread = (args: number[]) => {
  console.log('spread', ...args);
}

spread([1, 2, 3, 4, 5]);

