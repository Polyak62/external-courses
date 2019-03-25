function f1(str) {
    var result = [];
    for (i = 0; i < str.length; i++) {
        if (result.indexOf(str[i])==-1) {
            console.log(str.length - str.replace(new RegExp(str[i], "g"), "").length);
            result.push(str[i]);
        }
    }
}
var str = "lola";
(f1(str));

