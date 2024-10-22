// TASK:
// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" if that character appears only once
// in the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


// solution to the task:
function duplicateEncode(word) {
    const string = word.toLowerCase();
    const encoder = [];
    for (let char of string) {
        string.indexOf(char) === string.lastIndexOf(char) ? encoder.push('(') : encoder.push(')')
    }
    return encoder.join('');
}

// best practices:
// 1
function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

// 2
function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}