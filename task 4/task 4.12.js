function add(num1, num2) {
    var divider = 1000;
    var sum = num1 + num2;
    return Math.round(sum * divider) / divider;
}

console.log(add(3.6575575, 1.4367867867687244));