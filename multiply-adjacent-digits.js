// TASK:
// Multiply the adjacent digits which are not separated by a '-' or a '+' in a string, then do the sum.

// For example:

// "53+5"    ->   20, which is 5 * 3 + 5
// "266-66"  ->   36, which is 2 * 6 * 6 - 6 * 6
// "555"     ->  125, which is 5 * 5 * 5

// SOLUTION:
function digitMultiplication(expr) {
    const symbol = expr.match(/[-+*/]/g);
    const numArr = expr.split(/[-+*/]/);
    let result = numArr[0].split('').reduce((res, acc) => res * acc, 1);
    for (let i = 1; i < numArr.length; i++) {
        const sum = numArr[i].split('').reduce((res, acc) => res * acc, 1);
        switch (symbol[i - 1]) {
            case '+':
                result += sum;
                break;
            case '-':
                result -= sum;
                break;
            case '*':
                result *= sum;
                break;
            case '/':
                result /= sum;
                break;
            default:
                return null;
        }
    }

    return result;
}