//indexOf implementation for array

function indexOf(array = [], item = 'absent') {


    if (array == null || typeof array[Symbol.iterator] !== 'function') {
        return -1;
    }

    if (array.length == 0 || item == 'absent') {
        return -1;
    }
    let i = 0;
    for (arrItem of array) {
        if (arrItem === item) {
            return i;
        }
        i++;
    }
    return -1;
}

//Tests
console.log("indexOf([1,2,3,4,5,6]) === -1", indexOf([1, 2, 3, 4, 5, 6]) === -1);
console.log("indexOf([1,2,3,4,5,6], 5) === 4", indexOf([1, 2, 3, 4, 5, 6], 5) === 4);
console.log("indexOf({}, 1) === -1", indexOf({}, 1) === -1);
console.log("indexOf({}, 1) === -1", indexOf({}, 1) === -1);
console.log("indexOf({}, '3') === -1", indexOf([], '3') === -1);
console.log("indexOf([1,2,3], '2') === -1", indexOf([1,2,3], '2') === -1);
console.log("indexOf() === -1", indexOf() === -1);
console.log("indexOf('123', '2') === 1", indexOf('123', '2') === 1);
console.log("indexOf(null, '2') === -1", indexOf(null, '2') === -1);
console.log("indexOf(function(){}, '2') === -1", indexOf(function(){}, 2) === -1);


