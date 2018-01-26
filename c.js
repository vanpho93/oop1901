function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function() { console.log('Hello, I am ' + this.name); }
}

const teo = new Person('Teo Nguyen', 10);
const ti = new Person('Ti Nguyen', 11);
const tun = new Person('Tun Nguyen', 11);

teo.sayHello();
ti.sayHello();
tun.sayHello();

console.log(teo);
console.log(ti);
console.log(tun);
