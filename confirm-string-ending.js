//Function that confirms if string ending passed as an argument
//matches target string passed as as second argument

function confirmEnding(str, target) {
    if (str.substring(str.length - target.length) === target) {
        return true;
    }
    return false;
}
confirmEnding("He has to give me a new name", "name");