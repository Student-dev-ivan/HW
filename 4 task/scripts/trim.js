//trim implementation

function trim(str = '') {
    if (typeof str != 'string') {
        return '';
    }

    let trimmedString = '';
    const strLength = str.length;

    let startFound = false;
    let endFound = false;

    let start = -1;
    let end = -1;

    for (let i = 0; (!startFound || !endFound) && i < str.length; i++) {
        if (!startFound) {
            if (notSpace(str[i])) {
                start = i;
                startFound = true;
            }
        }
        if (!endFound) {
            let index = strLength - i - 1;
            if (notSpace(str[index])) {
                end = index;
                endFound = true;
            }
        }
    }

    if (start == -1 && end == -1) {
        return '';
    }

    for (start; start <= end; start++) {
        trimmedString += str[start];
    }
    return trimmedString;

}

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

//Test
console.log(trim('  test1 ') === 'test1', 'test1');
console.log(trim('') === '', `''`);
console.log(trim('  test 3  \n \t') === 'test 3', 'test 3');
console.log(trim('  t e s t 4 ') === 't e s t 4', 't e s t 4');
console.log(trim([]) === '', `''`);
console.log(trim([1, 2, 3, 4, '       ']) === '', `''`);
console.log(trim({}) === '', `''`);
console.log(trim(null) === '', '');
console.log(trim(NaN) === '', `''`);