function copyObject(obj) {
    var object={};
    for (var key in obj){
        object[key]=obj[key];
    }
    return object;
}

var user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};
console.log(copyObject(user));