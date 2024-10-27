// TASK
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// SOLUTION:
function capitalize(s) {
    const capitalizeArr = [];
    const el1 = s.split('').map((el, ind) => ind % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('');
    capitalizeArr.push(el1);
    const el2 = s.split('').map((el, ind) => ind % 2 ? el.toUpperCase() : el.toLowerCase()).join('');
    capitalizeArr.push(el2)
    return capitalizeArr;
};

// refactoring:
function capitalize(s) {
    const el1 = s.split('').map((el, ind) => ind % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('');
    const el2 = s.split('').map((el, ind) => ind % 2 ? el.toUpperCase() : el.toLowerCase()).join('');
    return [el1, el2];
};