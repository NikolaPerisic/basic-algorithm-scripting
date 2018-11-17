

//Combine Arrays with slice() and splice()
//Merge arr1 elements with arr2 at given index


function sliceAndSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
    return newArr;
}
sliceAndSplice([1, 2, 3], [4, 5, 6], 1);