//Returns the array of largest numbers from each provided sub-array
function largestOfFour(arr) {
    let tempArr = [];
    let tempNum = 0;
    for (let i = 0; i < arr.length; i++) {
        tempNum = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (tempNum < arr[i][j]) {
                tempNum = arr[i][j];
            }
        }
        tempArr.push(tempNum);
    }
    return tempArr;
}
largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);


//Using Math.max with spread operator
function largestOfFour(arr) {
    let tempArr = [];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(...arr[i]);
        tempArr.push(max);
    }
    return tempArr;
}
largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);