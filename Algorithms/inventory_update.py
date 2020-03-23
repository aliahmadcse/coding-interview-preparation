def updateInventory(arr1, arr2):
    #  All inventory must be accounted for or you're fired!
    result = []
    for item in arr1:
        for ele in arr2:
            if item[1] in ele[1]:
                result.append([item[0]+ele[0], item[1]])
                arr1.pop(arr1.index(item))
                arr2.pop(arr2.index(ele))

    result = result+arr1+arr2
    return result


#  Example inventory lists
curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
]

newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
]

# should return
# [[88, "Bowling Ball"], [2, "Dirty Sock"],
#  [3, "Hair Pin"], [3, "Half-Eaten Apple"],
#  [5, "Microphone"], [7, "Toothpaste"]]
print(updateInventory(curInv, newInv))
