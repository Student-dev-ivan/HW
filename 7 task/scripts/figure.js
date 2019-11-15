
class Figure {
    constructor(name = 'NoName') {
        this.name = name;
    }

    get figureName() {
        return this.name;
    }

    info() {
        throw new Error('You have to implement the method info!');
    }
    area() {
        throw new Error('You have to implement the method area!');
    }
    perimeter() {
        throw new Error('You have to implement the method perimeter!');
    }
}

class Square extends Figure {
    constructor(name, side = 0) {
        super(name);
        this.side = side;
    }
    info() {
        console.log(`Square has 4 sides with a length of ${this.side}`);
    }

    area() {
        return this.side ** 2;
    }
    perimeter() {
        return this.side * 4;
    }
}

class Rectangle extends Figure {
    constructor(name, sideA = 0, sideB = 0) {
        super(name);
        this.sideA = sideA;
        this.sideB = sideB;
    }
    info() {
        console.log(`Rectangle has 4 sides with a length of ${this.sideA} and ${this.sideB}`);
    }
    area() {
        return this.sideA * this.sideB;
    }
    perimeter() {
        return 2 * (this.sideA + this.sideB);
    }
}

class Triangle extends Figure {
    constructor(name, sideA = 0, sideB = 0, sideC = 0) {
        super(name);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    info() {
        console.log(`Triangle has 3 sides with a length of ${this.sideA}, ${this.sideB} and ${this.sideC}`);
    }

    area() {
        let p = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(2);
    }
    perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
}

const figures = [new Square('Square', 5), new Rectangle('Rectangle', 5, 6), new Triangle('Triangle', 3, 4, 5)];

for (let item of figures) {
    console.log(`${item.figureName}`)
    item.info();
    console.log(`Its area: ${item.area()}, perimeter: ${item.perimeter()}\n\n\n`);
}

