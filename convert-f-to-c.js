//Convert Fahrenheit to Celsius

function convertToF(celsius) {
    let fahrenheit;
    if (isNaN(celsius)) {
        return "Please input valid digit";
    }
    fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
convertToF("30");