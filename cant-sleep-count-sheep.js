// TASK:
// If you can't sleep, just count sheeps!!

// Given a non-negative integer, 3 for example, return a string with a murmur:
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


// SOLUTION:
var countSheep = function (num) {
    return num === 0 ? '' : Array.from({ length: num }, (v, i) => `${i + 1} sheep...`).join('');
}