function sym(...args) {
    let result = [];

    for (let i = 0; i < args.length - 1; i++) {
        if (i > 0) {
            let newArr = [...result];
            result = [];
            result.push(
                ...args[i + 1].filter((item) => !newArr.includes(item))
            );
            result.push(
                ...newArr.filter((item) => !args[i + 1].includes(item))
            );
        } else {
            result.push(
                ...args[i].filter((item) => !args[i + 1].includes(item))
            );
            result.push(
                ...args[i + 1].filter((item) => !args[i].includes(item))
            );
        }
    }

    return [...new Set(result)].sort();
}

const result = sym(
    [3, 3, 3, 2, 5],
    [2, 1, 5, 7],
    [3, 4, 6, 6],
    [1, 2, 3],
    [5, 3, 9, 8],
    [1]
); //[1, 2, 4, 5, 6, 7, 8, 9]

console.log(result);
