var Calculator = {
    result: 0,
    add: function (a) {
        this.result=this.result + a;
        return this.add.bind(Calculator);
    },
    subtract: function (a) {
        this.result=this.result - a;
        return this.subtract.bind(Calculator);
    },
    divide: function (a) {
        this.result=this.result / a;
        return this.divide.bind(Calculator);
    },
    multiply: function (a) {
        this.result=this.result * a
        return this.multiply.bind(Calculator);
    },
    getResult: function () {
        return this.result
    },
    reset: function () {
        result = 0
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
