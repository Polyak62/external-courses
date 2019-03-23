function f(str,numb) {
    var numb;
    return str.slice(0,numb)+'d'.replace(/d/g,'...');// символ d нужен для того,что бы понимать ,что находится в конце
}
var s="рязань";
var n=4;
console.log(f(s,n));