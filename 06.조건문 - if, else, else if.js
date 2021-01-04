const a = 1;

if (a + 1 === 2) {
    // console.log("a + 1 이 2 입니다.");
    // console.log("blabla");
    const a = 2;
    console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);

const b = 10;
if (b > 15) {
    console.log('b가 15보다 큽니다.');
} else {
    console.log('b가 15보다 크지 않습니다.');
}

if (b === 5) {
    console.log('5 입니다!');
} else if (b === 10) {
    console.log('10 입니다!');
} else {
    console.log('5도 아니고 10도 아닙니다.');
}