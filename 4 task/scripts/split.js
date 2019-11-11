//split implementation

function split(str, delimiter) {
    str = str != undefined ? str.toString() : '';
    let stringsArray = [''];
    let i = 0;

    if (delimiter == '') {
        for (char of str) {
            stringsArray[i] = char;
            i++;
        }
        return stringsArray;
    }

    for (char of str) {
        if (char == delimiter) {
            i++;
            stringsArray.push('');
        } else {
            stringsArray[i] += char;
        }
    }
    return stringsArray;
}

//Tests
console.log(split('Split').length === 1, 1);
console.log(split('Split', '').length === 5, 5);
console.log(split('Split', ' ').length === 1, 1);
console.log(split('13#33#2', '#').length === 3, 3);
console.log(split(1234563123, '3').length === 4, 4);

