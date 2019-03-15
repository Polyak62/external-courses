function getDivideTwo(array) {
    var result = [0, 0, 0];
    for (var i = 0; i < array.length; ++i) {
        if (array[i] == 0) {
            result[2]++;
        } else {
            if (array [i] % 2 == 0) {
                result[0]++;
            } else {
                result[1]++
            }
        }
    }
    return result;
}

var m = [5, 4, 5, 0, 0];
console.log(getDivideTwo(m));