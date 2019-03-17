function getDivideTwo(array) {
    var numberEven=0;
    var numbOdd=0;
    var numbZero=0;
    for (var i = 0; i < array.length; ++i) {
        if (array[i] == 0) {
            numbZero++;
        } else {
            if (array [i] % 2 == 0) {
                numberEven++;
            } else {
                numbOdd++;
            }
        }
    }
    var result=[numberEven,numbOdd,numbZero];
    return result;
}

var m = [5, 4, 5, 0, 0];
console.log(getDivideTwo(m));