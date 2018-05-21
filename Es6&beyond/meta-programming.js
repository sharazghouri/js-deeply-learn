// var arr = [2, 3, 4, 5, 6, 7, 8, 9];

// for (var v of arr) {
//console.log(v);
// }
//2, 3, 4, 5, 6, 7, 8, 9
// define iterator that only produces values
// // from odd indexes
// arr[Symbol.iterator] = function*() {
// 	var idx = 1;
// 	do {
// 		yield this[idx];
// 	} while ((idx += 2) < this.length);
// };

// for (var v of arr) {
//   console.log(v); // 5,7,9
// }
//toString()
//Symbol.toStringTag and Symbol.hasInstance
// function Foo() { }
// var a = new Foo();
// console.log(a.toString());
// console.log(a instanceof Foo);

function Foo(greeting) {
  this.greeting = greeting;
}
Foo.prototype[Symbol.toStringTag] = 'Foo';

Object.defineProperty( Foo, Symbol.hasInstance, {
	value: function(inst) {
		return inst.greeting == "hello";
	}
} );

var a = new Foo('hello');
var b = new Foo('world');
b[Symbol.toStringTag] = 'cool';
console.log(a.toString());
console.log(String(b));
console.log(a instanceof Foo);
console.log(b instanceof Foo);