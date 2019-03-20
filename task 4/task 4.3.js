function deleteSpace(string) {
   return string.replace(' ','');
}

var str=" task task";
console.log(deleteSpace(str));


String.prototype.trim=function(string) {
   return this.trimRight().trimLeft();
}
var str=" task task";
console.log(deleteSpace(str));
