function A(){
	this.a = "a";
	this.b = function(a){
		a = "b"
	}
}
A.prototype.ab= function(){
	this.a = A.name
}
console.log(A.ab);
var a = new A();
a.b();
console.log(a);
a.ab();
console.log(a);
a.b.call({a:"c"},"d");
console.log(a);