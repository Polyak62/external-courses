function getRandom(min, max) {
    return Math.floor(Math.random() * ((max+1) - min)) + min;
}

console.log(getRandom(4, 8));