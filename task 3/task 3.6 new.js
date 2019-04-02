function copyObject(obj) {
    var object={};
    for (var key in obj){
        if (obj[key] instanceof Object) {
            object[key] = copyObject(obj[key]);
        } else {
            object[key]=obj[key];
        }
    }
    return object;
}

var user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
    arm: {
        numberFinger: 5,
        name: 'right'
    }
};
console.log(copyObject(user));