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

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const { pointA, pointB } = this;
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(0, 0);
const p2 = new Point(1, 0);
const p3 = new Point(0, 1);
const l1 = new Line(p1, p2);
console.log(l1.getLength());

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {
        const { pointA, pointB, pointC } = this;
        const l1 = new Line(pointA, pointB);
        const l2 = new Line(pointA, pointC);
        const l3 = new Line(pointB, pointC);
        return l1.getLength() + l2.getLength() + l3.getLength();
    }
}

const t1 = new Triangle(p1, p2, p3);
console.log(t1.getPerimeter());
