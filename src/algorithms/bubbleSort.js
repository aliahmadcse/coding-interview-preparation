const { performance } = require("perf_hooks");
/**
 * Sorts the array in O(n^2)
 * @param {Array} array
 * @returns {Array} array a sorted array in ascending order
 */

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[j], array[i]] = [array[i], array[j]];
            }
        }
    }

    return array;
}

const array = Array(10000)
    .fill()
    .map(() => Math.round(Math.random()*1000));

const t0 = performance.now();

console.log(bubbleSort(array));

const t1 = performance.now();

console.log(`${(t1 - t0) / 1000} sec`);
