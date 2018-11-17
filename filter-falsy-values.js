//This function removes all values that Javascript
//considers falsy

function bouncer(arr) {
    let filtered = arr.filter(item => Boolean(item));
    return filtered;
}
bouncer([7, "ate", "", false, 9]);