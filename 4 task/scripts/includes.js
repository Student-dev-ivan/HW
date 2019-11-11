//includes implementation
import { substring } from './substring.js';

function includes(str, strToFind) {
    str = str != undefined ? str.toString() : '';
    strToFind = strToFind != undefined ? strToFind.toString() : 'undefined';

    const lengthToCheck = str.length - strToFind.length;
    const strToFindLength = strToFind.length;

    for (let i = 0; i <= lengthToCheck; i++) {
        if (substring(str, i, i + strToFindLength) == strToFind) {
            return true;
        }
    }
    return false;
}

//Tests

console.log("includes('undefined') === false", includes('undefined') === true);
console.log("includes('What does the fox say?', 'say') === true", includes('What does the fox say?', 'say') === true);
console.log("includes('What does the fox say?', 'Say') === false", includes('What does the fox say?', 'Say') === false);
console.log("includes('What does the fox say?', []) === true", includes('What does the fox say?', []) === true);
console.log("includes('What does the fox say?', {}) === false", includes('What does the fox say?', {}) === false);
console.log("includes(12345, 3) === true", includes(12345, 3) === true);
console.log("includes({}, 'object') == true", includes({}, 'object') == true);