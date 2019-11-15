
class Marker {
    constructor(color = 'green') {
        this.color = color;
        this.ink = 100;
    }
    print(text = '') {
        const len = text.length;
        let coloredText = '';
        let i = 0;
        while (this.ink > 0 && i < len) {
            let char = text[i++];
            coloredText += char;
            notSpace(char) ? this.ink -= 0.5 : null;
        }
        console.log(`%c${coloredText}`, `color:${this.color}`);
        return this.ink + '%';

        function notSpace(symbol) {
            const spaces = [' ', '\n', '\r', '\t'];
            const spacesL = spaces.length;
            for (let i = 0; i < spacesL; i++) {
                if (spaces[i] == symbol) {
                    return false;
                }
            }
            return true;
        }
    }
}

class RefuelingMarcker extends Marker {
    constructor(color) {
        super(color);
    }
    refuel() {
        super.ink = 100;
    }
}

const rmarker = new RefuelingMarcker();

while (true) {
    if (rmarker.print('1') == '0%')
        break;
}

console.log('ink', rmarker.ink + '%');
rmarker.refuel();
console.log('ink', rmarker.ink + '%');

