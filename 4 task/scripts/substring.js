//substring implemetation
//substring() - full string
//substring(-start,-end) - ""
//substring(start>end) - swap start and end return string between
//substring('NaN') = substring(0) - full string
//substring('NaN', 'NaN') - ""
//substring(number,'NaN') - NaN = 0 and swap with number return string between
export function substring(str, start, end) {
    let substr = '';
    str = str != undefined ? str.toString() : '';
    const strLength = str.length;
    if (end == undefined) {
        end = strLength;
    }

    //convert to num
    const toNumStart = Number(start);
    const toNumEnd = Number(end);

    //check start and end for NaN
    start = isNaN(toNumStart) ? 0 : toNumStart;
    end = isNaN(toNumEnd) ? 0 : toNumEnd;

    //check for negative values
    start = start < 0 ? 0 : start;
    end = end < 0 ? 0 : end;

    //swap values if start > end
    if (start > end) {
        let tmp = start;
        start = end;
        end = tmp;
    }

    for (let i = start; i < end && i < strLength; i++) {
        substr += str[i];
    }
    return substr;
}

//Tests

// console.log(substring('Hey dudes') === 'Hey dudes', 'Hey dudes');
// console.log(substring('Hey dudes', 5) === 'udes', 'udes');
// console.log(substring('Hey dudes', -5, -6) === '', '');
// console.log(substring('Hey dudes', 5, 0) === 'Hey d', 'Hey d');
// console.log(substring('Hey dudes', 'Any string') === 'Hey dudes', 'Hey dudes');
// console.log(substring('Hey dudes', 'Any string', 6) === 'Hey du', 'Hey du');
// console.log(substring('Hey dudes', {}) === 'Hey dudes', 'Hey dudes');
// console.log(substring('Hey dudes', {}, []) === '', '');
// console.log(substring('Hey dudes', 2, -4) === 'He', 'He');




// function trim(str = '') {
//     const strLength = str.length;
//     let start = 0;
//     let startFound = false;
//     let end = strLength;
//     let i = 0;
//     let condition = i < strLength;
//     let step = 1;

//     let trimmedString = '';

//     for (i; condition; i + step) {
//         if (!startFound) {
//             if (notSpace(str[i])) {
//                 start = i;
//                 i = strLength - 1;
//                 condition = i > 0;
//                 step = -1;
//                 startFound = true;
//             }
//         }

//         if (notSpace(str[i])) {
//             end = i;
//             break;
//         }

//     }

//     for (start; start <= end; start++) {
//         trimmedString += str[start];
//     }
//     return trimmedString;

// }

