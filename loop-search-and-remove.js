// Search and remove nested array that contains
//element passed as an argument to a function


function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }
    //return filtered array
    return newArr;
}