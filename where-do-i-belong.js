

//This function sorts the array and returns the lowest
//index at which the value from argument should be inserted


function getIndexToIns(arr, num) {
    let sorted = arr.sort((a, b) => a - b);
    let counter = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (num <= sorted[i]) {
            counter = sorted.indexOf(sorted[i]);
            break;
        } else {
            counter = sorted.length;
        }
    }
    return counter;
}
getIndexToIns([10, 20, 30, 40, 50], 35);