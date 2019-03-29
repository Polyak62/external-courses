function camelCase(string) {
    var arr=string.split(" ");
    for (var i=0; i<arr.length; ++i){
        arr[i]=(CapsStr(arr[i]));
    }
    return arr.join("");
}

function CapsStr(string) {
    var re=string[0];
    string[0].toUpperCase();
    return string.replace(re,string[0].toUpperCase());
}

var s="рязань москва самара";
console.log(camelCase(s));
