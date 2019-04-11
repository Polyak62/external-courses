var Calculator = (function() {
    var result = 0;
    var sum=function(a) {
            if (a!=undefined) {
                result += a;
            }
            return sum;
        };
    var sub=function(a) {
        if (a!=undefined){
            result -= a;
        }
        return sub;
    };
    var div=function (a){
        if (a!=undefined) {
                result /= a;
            }
        return div;
        };
    var mult=function (a){
        if (a!=undefined) {
            result *= a;
        }
        return mult;
    };
    return {
        add:sum,
        subtract:sub,
        divide:div,
        multiply:mult,
        getResult: function() {
            return result;
        },
        reset: function () {
            result = 0
        }
    }
}());
Calculator.add(4)(1);
console.log(Calculator.getResult());

console.log(Calculator.reset());
console.log(Calculator.getResult());
Calculator.add(4)(1);
console.log(Calculator.getResult());
Calculator.subtract(1)(1)(1)(2);
console.log(Calculator.getResult());
console.log(Calculator.getResult());
Calculator.add()();
console.log(Calculator.getResult());
Calculator.subtract()()()();
console.log(Calculator.getResult());

