// reverse a string

function reverseString(str) {
    let tempArr = [];
    for (let i = str.length; i >= 0; i--) {
        tempArr.push(str[i]);
    }
    tempArr = tempArr.join("");
    return tempArr;
}
reverseString("hello");