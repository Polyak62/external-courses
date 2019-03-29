function f1(str) {
    var result = [];
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < result.length; j++){
            if (result[j].name===str[i]){
                result[j].quantity++;
                console.log("ok");
                break;
            }
            result.push({name:str[i],quantity:1})
        }
    }
    return result
}
var str = "lola";
(f1(str));
console.log(f1(str));
