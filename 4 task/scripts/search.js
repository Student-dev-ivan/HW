import { substring } from './substring.js';
//search implemetation
//search() - 0

function search(str, strToFind) {
    //init
    str = str != undefined ? str.toString() : '';
    strToFind = strToFind != undefined ? strToFind.toString() : '';

    const lengthToCheck = str.length - strToFind.length;
    const strToFindLength = strToFind.length;

    for (let i = 0; i <= lengthToCheck; i++) {
        if (substring(str, i, i + strToFindLength) == strToFind) {
            return i;
        }
    }
    return -1;
}

//Tests
// console.log(search('What does the fox say?') === 0, 0);
// console.log(search('What does the fox say?', 'say') === 18, 18);
// console.log(search('What does the fox say?', 'Say') === -1, -1);
// console.log(search('What does the fox say?', []) === 0, 0);
// console.log(search('What does the fox say?', {}) === -1, -1);
// console.log(search('What does the fox say?', {}) === -1, -1);
// console.log(search('What does the fox say?', {}) === -1, -1);
// console.log(search(12345, 3) === 2, 2);
// console.log(search({}, 'object') == 1, 1);

