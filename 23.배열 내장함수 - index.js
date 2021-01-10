const superheroes = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
];

// const index = superheroes.indexOf('토르');
// const index = superheroes.indexOf('닥터 스트레인지');
// console.log(index);

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    }
];

// const index = todos.findIndex(todo => todo.id === 3);
const index = todos.find(todo => todo.done === false);
console.log(index);