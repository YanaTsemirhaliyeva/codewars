// TASK
// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// SOLUTION:
function parse(data) {
    let count = 0;
    const array = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'i') {
            count += 1;
        }
        if (data[i] === 'd') {
            count -= 1;
        }
        if (data[i] === 's') {
            count **= 2;
        }
        if (data[i] === 'o') {
            array.push(count);
        }
    }
    return array;
}

// Best practices:
function parse(data) {
    let res = [];

    data.split('').reduce((cur, s) => {
        if (s === 'i') cur++;
        if (s === 'd') cur--;
        if (s === 's') cur = Math.pow(cur, 2);
        if (s === 'o') res.push(cur);

        return cur;
    }, 0);

    return res;
}