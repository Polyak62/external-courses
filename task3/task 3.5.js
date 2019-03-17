function copyObject(obj) {
    var obj2={};
    Object.assign (obj2,obj);
    return obj2;
}

var user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};
console.log(copyObject(user));
