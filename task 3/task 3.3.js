function checkFild(string,obj) {
    return string in obj;
}

var object = {
    myProp: 100,
    1: 200,
};
var string = "myProp1";
console.log(checkFild(string,object));