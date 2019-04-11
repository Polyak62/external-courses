var some = function(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
};
var arr=[71,71,90];
var cB=function(element,index,arr){
    return element<10;
};
console.log(some(arr,cB));