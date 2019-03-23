function CapsStr(string) {
    var re=string[0];
    return string.replace(re,string[0].toUpperCase());
}

var s="рязань";
console.log(CapsStr(s));
