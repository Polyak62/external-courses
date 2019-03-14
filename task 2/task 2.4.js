function f(a, b) {
    if (a.length != b.length) {
        return false;
    }
    for (var i = 0; i < a.length; ++i) {
        if (a[i] != b[i]) {
            return false;}

    }
    return true;
}
var array1 = [1, 3, 5];
var array2 = [1, 3, 4];
console.log(f(array1, array2));