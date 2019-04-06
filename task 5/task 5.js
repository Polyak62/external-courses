var Calculator = {
    result: 0,

    add: function addModul(){}(function (a) {
        if (a!=undefined){
            result=result + a;
        })
        return add;
    },
    subtract: function (a) {
        if (a!=undefined){
            this.result=this.result - a;
        }
        return this.subtract.bind(this);
    },
    divide: function (a) {
        if (a!=undefined){
            this.result=this.result / a;
        }
        return this.divide.bind(this);
    },
    multiply: function (a) {
        if (a!=undefined){
            this.result=this.result * a;
        }
        return this.multiply.bind(this);
    },
    getResult: function () {
        return this.result
    },
    reset: function () {
        this.result = 0
    }
};
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
