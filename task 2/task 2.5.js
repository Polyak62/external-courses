function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
var m=[1,9,3,4,10,5];
console.log(getMaxOfArray(m));