

//Capitalize first letter of each word in a sentence

function titleCase(str) {
    let newStr = str.toLowerCase().split(" ");
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
    }
    return newStr.join(" ");
}
titleCase("let's caPPItalIZe fiRST letTer of eaCh woRD");