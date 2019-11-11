//repeat implemetataion

function repeat(str, n) {
    let repeatedString = '';
    str = str != undefined ? str.toString() : '';
    n = Number.parseInt(n);
    if (isNaN(n)) {
        return '';
    }
    for (let i = 0; i < n; i++) {
        repeatedString += str;
    }
    return repeatedString;
}

//Tests
console.log(repeat() === '', `''`);
console.log(repeat('hi ') === '', `''`);
console.log(repeat('hi ', 3) === 'hi hi hi ', 'hi hi hi ');
console.log(repeat(null, 3) === '', `''`);
console.log(repeat({}, 2) === '[object Object][object Object]', '[object Object][object Object]');
console.log(repeat(undefined, 2) === '', `''`);
console.log(repeat(123, 2) === '123123', '123123');