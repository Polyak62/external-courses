var filter = function(arr, callback) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            array.push(arr[i]);
        }
    }
    return array;
};
var arr=[1,3,2,4,5,6,71,7,9];
var cB=function(element,index,arr){
    return element<10;
};
console.log(filter(arr,cB));