function getMaxOfArray(array) {
    var maxEl=array[0];
    var arrayLength=array.length;
    for (var i = 0;i < arrayLength;++i){
        if (maxEl<array[i]){
            maxEl=array[i];
        }
    }
    return maxEl;
}

var m=[1,2,3,4,2,1,3,7,99,6,6,90];
console.log(getMaxOfArray(m));