function updateInventory(arr1, arr2) {
    let matchedItems = arr1.map(([quan, item]) => {
        // looping over arr2
        for (const [index, [newQuan, newItem]] of arr2.entries()) {
            // if arr1 item match with new item, update the item quantity
            // else just continue
            if (item === newItem) {
                // indicates that the arr2 item is matched
                arr2[index].push(true);
                return [quan + newQuan, item];
            }
        }
        // if nothing match with arr2 inventry, returns the arr1 inventry
        return [quan, item];
    });

    // filtering out the non matched item
    const notMatched = arr2.filter((item) => item[2] !== true);
    // consideing the non matched item also
    matchedItems.push(...notMatched);
    // sorting in alphabetical order
    return matchedItems.sort((item1, item2) =>
        item1[1].localeCompare(item2[1])
    );
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
