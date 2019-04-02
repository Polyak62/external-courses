function camelCase(string) {
    var arr=string.split(" ");
    for (var i=0; i<arr.length; ++i){
        arr[i]=(CapsStr(arr[i]));
    }
    arr[0]=arr[0].toLowerCase();
    return arr.join("");
}

function CapsStr(string) {
    var re=string[0];
    return string.replace(re,string[0].toUpperCase());
}

var s="Рязань москва самара";
console.log(camelCase(s));
