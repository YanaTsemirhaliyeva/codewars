// TASK:

// Step 1:
// Create a function called encode() to replace all the lowercase vowels
// in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4".
// There is no need to worry about uppercase vowels in this kata.

// Step 2:
// Now create a function called decode() to turn the numbers back into vowels according
// to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".


// Solution to the task:
function encode(string) {
    const LETTERS = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    }
    let encodeStr = '';
    for (let i = 0; i < string.length; i++) {
        encodeStr += LETTERS[string[i]] !== undefined ? LETTERS[string[i]] : string[i];
    }
    return encodeStr;
}

function decode(string) {
    const NUMBERS = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
    };
    let decodeStr = '';
    for (let i = 0; i < string.length; i++) {
        decodeStr += NUMBERS[string[i]] !== undefined ? NUMBERS[string[i]] : string[i];
    }
    return decodeStr;
}

// best practices:
// solution 1:
// turn vowels into numbers
function encode(string) {
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string) {
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}

//solution 2:
function encode(string) {
    var vowelMapping = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 };
    return codeStringGivenMapping(string, vowelMapping);
}

function decode(string) {
    var vowelMapping = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
    return codeStringGivenMapping(string, vowelMapping);
}

function codeStringGivenMapping(string, mapping) {
    return string.split('').map(function (char) {
        return mapping[char] || char;
    }).join('');
}