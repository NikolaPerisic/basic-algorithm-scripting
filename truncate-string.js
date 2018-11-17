

//Truncate a string if its longer than 
//the maximum string length (second argument)

function truncateString(str, num) {
    if (num >= str.length) {
        return str;
    }
    return str.substring(0, num).concat("...");
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);