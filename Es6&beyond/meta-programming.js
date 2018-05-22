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

// function Foo(greeting) {
//   this.greeting = greeting;
// }
// Foo.prototype[Symbol.toStringTag] = 'Foo';

// Object.defineProperty( Foo, Symbol.hasInstance, {
// 	value: function(inst) {
// 		return inst.greeting == "hello";
// 	}
// } );

// var a = new Foo('hello');
// var b = new Foo('world');
// b[Symbol.toStringTag] = 'cool';
// console.log(a.toString());
// console.log(String(b));
// console.log(a instanceof Foo);
// console.log(b instanceof Foo);

//Spicess
// class Cool {
//   static get [Symbol.species]() { return this };

//   again() {
//     return new this.constructor[Symbol.species]();
//   }
// }

// class Fun extends Cool {

// }
// class Awsome extends Cool {
//   // force `@@species` to be parent constructor
//   static get [Symbol.species]() { return Cool; }
// }

// var a = new Fun(),
//   b = new Awsome(),
//   c = a.again(),
//   d = b.again();

// console.log(c instanceof Fun);
// console.log(d instanceof Awsome);
// console.log(c instanceof Cool);
//To pramitive 

var arr = [1, 2, 3, 4, 5];
//console.log(arr + 10); // 1,2,3,4,510
arr[Symbol.toPrimitive] = function (hint) {

  if (hint == 'default' || hint == 'number') {
    return this.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  }
}

var o = { a: 1, b: 2, c: 3 },
  a = 10, b = 20, c = 30;

o[Symbol.unscopables] = {
  a: false,
  b: true,
  c: false
};

with (o) {
  console.log(a, b, c);		// 1 20 3
}