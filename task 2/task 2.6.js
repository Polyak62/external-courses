
function prime(a) {
    for (var i=a;i>2;--i){
        if (a%(i-1)==0){
            return false;
        }
    }
    return true;
}
var x=7;
console.log(prime(x));
