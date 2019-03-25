function f(str,numb) {
    var postfix = "...";
    if (str.length>numb && numb >= postfix.length){
        return str.slice(0, numb - postfix.length) + postfix
    }
    return str;
}
var s="рязань";
var n=4;
console.log(f(s,n));