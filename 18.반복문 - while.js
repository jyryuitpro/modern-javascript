const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let i = 0;
let isFun = false;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

while (!isFun) {
    console.log(i);
    i++;
    if (i === 30) {
        isFun = true;
    }
}