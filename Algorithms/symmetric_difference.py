def get_unique(list1, list2):
    # receives two lists
    # returns a list  of elements which are either in list1
    # or list2 but not in both
    unique = []
    for item in list1:
        if (item not in list2 and item not in unique):
            unique.append(item)
    for item in list2:
        if (item not in list1 and item not in unique):
            unique.append(item)
    return unique


def sym(*args):
    args = list(args)
    result = list()
    i = 1
    while args:
        if i == 1:
            item1 = args.pop(0)
            item2 = args.pop(0)
            result = get_unique(item1, item2)
        else:
            item3 = args.pop(0)
            result = get_unique(result, item3)
        i = i+1
    return sorted(result)


if __name__ == "__main__":
    # should return [3,4,5]
    print(sym([1, 2, 3], [5, 2, 1, 4]))

    # should return [1,4,5]
    print(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))

    # should return [2, 3, 4, 6, 7]
    print(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))

    # should return [1, 2, 4, 5, 6, 7, 8, 9]
    print(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [
        3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))

    # should return [3,4,5]
    print(sym([1, 2, 3], [5, 2, 1, 4, 5]))
