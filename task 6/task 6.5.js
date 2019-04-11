var map = function(arr, callback) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        array.push(callback(arr[i], i, arr));
    }
    return array;
};
var arr=[1,3,2,4,5,6,71,7,9];
var cB=function(element,index,arr){
    return element+1;
};
console.log(map(arr,cB));