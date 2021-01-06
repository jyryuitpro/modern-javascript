// const array = [1, 2, 3, 4, 5];
// console.log(array);

// const array = [1, 'blabla', {}, 4];
const array = [1, true, {a: 1}, [1, 2, 3, 4]];
array.push(6);

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]); // undefined

// 객체 배열
const objects = [
    {name: '멍멍이'},
    {name: '야옹이'}
];

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

console.log(objects.length);

objects.push(
    {name: '멍뭉이'}
);

console.log(objects);
console.log(objects.length);
