// const dogName = '멍멍이';
// const dogAge = 2;

// console.log(dogName);
// console.log(dogAge);

const dog = {
    name: '멍멍이',
    age: 2,
    'key whit space': 'asdf'
}

console.log(dog);
console.log(dog.name);
console.log(dog.age);

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨',
};

const captainAmeriaca = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmeriaca);

// 객체 - 비구조화 할당
function print1(hero) {
    const { alias, name, actor} = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

function print2({ alias, name, actor}) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print1(ironMan);
print1(captainAmeriaca);

print2(ironMan);
print2(captainAmeriaca);

const {name} = ironMan;
console.log(name);