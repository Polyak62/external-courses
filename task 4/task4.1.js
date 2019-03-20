var obj = {
    name: "Vasya",
    age: 18
};
var obj1 = Object.create(obj);
function searchProto(name, object) {
    for (var key in object.__proto__) {
        if (key == name){
            return object[name];
        }
    }
}

console.log(searchProto("age", obj1));
