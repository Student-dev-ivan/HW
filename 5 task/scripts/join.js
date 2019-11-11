//join implementation

function join(array, separator = ',') {
    if (arr == null || typeof arr[Symbol.iterator] !== 'function' || !arr.length) {
        return '';
    }
    separator = separator.toString();
    const arrayLength = array.length;
    let str = '';
    if (arrayLength == 1) {
        return array[0].toString();
    } else {
        for (let i = 0; i < arrayLength; i++) {
            str += i != arrayLength - 1 ? array[i] + separator : array[i];
        }
        return str;
    }

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('arr:', arr);
console.log("join(arr) === '1,2,3,4,5,6,7,8'", join(arr) === '1,2,3,4,5,6,7,8');
console.log("join(arr, '$') === '1$2$3$4$5$6$7$8'", join(arr, '$') === '1$2$3$4$5$6$7$8');
console.log("join(arr, 44) === '1442443444445446447448'", join(arr, 44) === '1442443444445446447448');
console.log("join({}) === ''", join({}) === '');
console.log("join('Halo')==='H,a,l,o'", join('Halo') === 'H,a,l,o');
