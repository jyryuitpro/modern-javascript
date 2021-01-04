const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

// numbers.a = 5;
// console.log(numbers);

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

const dog = {
    _name: '멍멍이',

    get name() {
        console.log('_name을 조회합니다..');
        return this._name;
    },

    set name(value) {
        console.log('이름이 바뀝니다..' + value);
        this._name = value;
    }
};

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name);

console.log();

console.log(dog.name);

console.log();

const _numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
};

console.log(_numbers.sum);
_numbers.a = 5;
_numbers.b = 7;
_numbers.a = 9;
console.log(_numbers.sum);
console.log(_numbers.sum);
console.log(_numbers.sum);

console.log();

const __numbers = {
    _a: 1,
    _b: 2,
    get sum() {
        console.log('sum');
        return this._a + this._b;
    }
};

console.log(__numbers.sum);
__numbers._a = 5;
__numbers._b = 7;
__numbers._a = 9;
console.log(__numbers.sum);
console.log(__numbers.sum);
console.log(__numbers.sum);

