class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        const { x, y } = this;
        return Math.sqrt(x * x + y * y);
    }
}

const a = { name: 'Teo' };
const b = { name: 'Teo' };
const c = a;

console.log(a === b);

a.name = 'Teo 2';
// Khi so sanh cac gia tri kieu Object la so sanh tham chieu cua gia tri do

console.log(a === c);
console.log(c);

function change(obj) {
    obj.name = '222';
}

function changePrimitive(a) {
    a = 2;
}

const x = 5;
changePrimitive(x);
console.log(x);

change(b);

console.log(b);


