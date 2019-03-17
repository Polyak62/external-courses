function showAllKey(obj) {
    for (var key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
}

var user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};

console.log(showAllKey(user));