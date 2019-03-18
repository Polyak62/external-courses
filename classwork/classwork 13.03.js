function f(name,age) {
    return {
        name:name,
        age:age,
    };
}
var array=[];
for (var i=0;i<7;++i){
    array[i]=f("name "+i,18+i)
}
function search(array,name,val) {
    for (var i=0;i<array.length;++i){
        if ((name in array[i])&&(array[i][name]==val)){
return array[i];
        }
    }
}
var user=search(array,"age",23);
user.name='lois';
user.age=25;
user.solary=30000;
var marry={name:"Marry",
age:27,
};
array.push(marry);
marry=search(array,name,"Marry");
delete marry.age;
marry.husband=user;
