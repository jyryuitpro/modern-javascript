const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
console.log(index);

// numbers.splice(index, 1);
// const spliced = numbers.splice(index, 2);
// console.log(spliced);
// console.log(numbers);

const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);

