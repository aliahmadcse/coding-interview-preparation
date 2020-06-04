const diff = (arr1, arr2) => [
    ...arr1.filter((e) => !arr2.includes(e)),
    ...arr2.filter((e) => !arr1.includes(e)),
];

const sym = (...args) => [...new Set(args.reduce(diff))].sort();

const result = sym(
    [3, 3, 3, 2, 5],
    [2, 1, 5, 7],
    [3, 4, 6, 6],
    [1, 2, 3],
    [5, 3, 9, 8],
    [1]
); //[1, 2, 4, 5, 6, 7, 8, 9]

console.log(result);
