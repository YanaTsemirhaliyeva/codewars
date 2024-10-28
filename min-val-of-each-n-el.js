// TASK:
// Description:
// Complete the function. Two arguments will be given:

// arr: An array that contains some integers (positve,negative or zero).
// n: A positive integer. 1 <= n <= arr.length.
// Your task is to find the minimum value of each n adjacent elements in arr. Returns by a new array. For example:

// arr = [1,2,3,10,-5], n = 2   ==>  [1,2,3,-5]
// # The min value of each 2 adjacent elements are:
// [(1,2)...]   --> 1
// [.(2,3)..]   --> 2
// [..(3,10).]  --> 3
// [...(10,-5)] --> -5

// SOLUTION:
function minValue(arr, n) {
    if (n === 1) return arr;
    if (n === arr.length) return [Math.min(...arr)];
    const res = [];
    for (let i = 0; i <= arr.length - n; i++) {
        const minVal = Math.min(...arr.slice(i, i + n));
        res.push(minVal);
    }
    return res;
}

// Best practices:
function minValue(arr, n) {
    let res = [];
    for (let i = 0; i < arr.length - n + 1; i++)
        res.push(Math.min(...arr.slice(i, i + n)));
    return res;
}