function addField(string,obj) {
    if (!(string in obj)){
        obj[string]="new";
    }
    return obj;
}

var object = {
    myProp: 100,
    1: 200,
};
var string = "myProp";
console.log(addField(string,object));