//Factorialize a number

function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    let fact = num - 1;
    while (fact > 0) {
        num = num * fact;
        fact--;
    }
    return num;
}
factorialize(5);