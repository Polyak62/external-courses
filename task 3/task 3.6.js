function deepCopy(obj) {
    return  JSON.parse(JSON.stringify(obj));
}

var user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};

var country = {

    name: "Германия",
    language: "немецкий",
    capital:{

        name: "Берлин",
        population: 3375000,
        year: 1237
    }
};

console.log(deepCopy(country));