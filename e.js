class School {
    constructor(name) {
        this.name = name;
    }
}

class Person {
    constructor(name, age, school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }

    sayHello() {
        console.log('Hello, I am ' + this.name + ', dang hoc ' + this.school.name);
    }
}
const kpt = new School('KPT');
const teo = new Person('Teo Nguyen', 10, kpt);
teo.sayHello();
