

//Chunk an array into smaller sub-arrays of size 
//provided in the second argument

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    newArr.push(arr.splice(0, size));
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);