//includes implementation for array

function includes(array = [], item = 'absent') {
    if (array == null || typeof array[Symbol.iterator] !== 'function') {
        return false;
    }

    if (array.length == 0 || item == 'absent') {
        return false;
    }

    let i = 0;
    for (arrItem of array) {
        if (arrItem === item) {
            return true;
        }
        i++;
    }
    return false;
}

//Tests
console.log("includes([1,2,3,4,5,6]) === false", includes([1, 2, 3, 4, 5, 6]) === false);
console.log("includes([1,2,3,4,5,6]) === 4", includes([1, 2, 3, 4, 5, 6], 5) === true);
console.log("includes({}, 1) === false", includes({}, 1) === false);
console.log("includes({}, 1) === false", includes({}, 1) === false);
console.log("includes({}, '3') === false", includes([], '3') === false);
console.log("includes([1,2,3], '2') === false", includes([1,2,3], '2') === false);
console.log("includes() === false", includes() === false);
console.log("includes('123', '2') === true", includes('123', '2') === true);
console.log("includes(null, '2') === false", includes(null, '2') === false);
console.log("includes(function(){}, '2') === false", includes(function(){}, 2) === false);