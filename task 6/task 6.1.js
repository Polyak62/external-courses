var mySlice = function (arr, begin, end) {
    var result = [];
    var start = begin;
    var finish = end;
    if (start === undefined){
        start = 0;
    } else if (start < 0) {
        start = start + arr.length
    };
    if (finish === undefined){
        finish = arr.length;
    } else if (finish < 0) {
        finish = finish + arr.length - 1
    };
    for (var i = start; i < finish; i++){
        result.push(arr[i])
    }
    return result;

};
var array = [0, 1, 2, 3, 4, 5];
console.log(mySlice(array,1,-1));
