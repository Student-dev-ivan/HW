//reverse implementation

function reverse(arr) {
    if (arr == null || typeof arr[Symbol.iterator] !== 'function' || !arr.length) {
        return;
    }

    const reverseArray = [];
    const arrLength = arr.length;

    for (let i = arrLength - 1; i >= 0; i--) {
        reverseArray.push(arr[i]);
    }

    for (let i = 0; i < arrLength; i++) {
        arr[i] = reverseArray[i];
    }
}

//Tests
const array = [1,2,3,4,5,6];
console.log( array);

