/**
 * @return {type:int} sum of indexes of matched pairs
 * @param {Array} arr
 * @param {int} arg
 */
function pairwise(arr, arg) {
    if (!arr.length) {
        return 0;
    }
    const indexPair = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (indexPair.includes(i)) break;
            if (arr[i] + arr[j] == arg && i !== j && !indexPair.includes(j)) {
                indexPair.push(i, j);
            }
        }
    }
    return indexPair.reduce((a, b) => a + b, 0);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
