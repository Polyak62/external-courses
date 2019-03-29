function f(str,numb) {
    var postfix = "...";
    if (str.length>numb && numb >= postfix.length){
        return str.slice(0, numb - postfix.length) + postfix
    }
    return str;
}
var s="ряза";
var n=4;
console.log(f(s,n));


//4.7 numb >= postfix.length - мне кажется, что логичнее проверять, что длина строки больше, чем numb

//*Написать функцию, которая принимает два аргумента, строку и число.
// Если длина строки больше, чем переданное число, то строка урезается и в конец добавляется «…»,
// так чтобы длина отрезанной строки вместе с «…» (многоточие) равнялась переданному числу.