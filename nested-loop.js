// Nested loop search and remove element from array
// nested within another array

function filteredArray(arr, elem) {
    let newArr = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== elem) {
                temp.push(arr[i][j]);
            }
        }
        newArr.push(temp);
        temp = [];
    }
    return newArr;
}
console.log(filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9]
], 3));