/**
 *
 * @param {type:String} str
 */
function permAlone(str) {
    // Create a regex to match repeated consecutive characters.
    const regex = /(.)\1+/;

    // Split the string into an array of characters.
    const arr = str.split("");
    const permutations = [];
    let tmp;

    // Return 0 if str contains same character.
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

    // Function to swap variables' content.
    function swap(index1, index2) {
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }

    // Generate arrays of permutations using the algorithm.
    function generate(len) {
        if (len === 1) {
            // Make sure to join the characters as we create the permutation arrays
            permutations.push(arr.join(""));
        } else {
            for (let i = 0; i != len; ++i) {
                generate(len - 1);
                swap(len % 2 ? 0 : i, len - 1);
            }
        }
    }
    // console.log(arr);

    generate(arr.length);

    // console.log(permutations);
    // Filter the array of repeated permutations.
    var filtered = permutations.filter(function (string) {
        return !string.match(regex);
    });

    // Return how many have no repetitions.
    return filtered.length;
}

console.log(permAlone("abfdefa"));
