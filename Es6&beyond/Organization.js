//Iteraor

// var arr = [1, 2, 3];
// var it = arr[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// var m = new Map();
// m.set('foo', 42);
// m.set({ cool: true }, "hello word");
// var it1 = m[Symbol.iterator]();
// var it2 = m.entries();

// it1.next();
// it1.next();
// it1.next();

// it2.next();
// it2.next();
// it2.next();

//Custom itertor
/* var Fib = {
	[Symbol.iterator]() {
		var n1 = 1, n2 = 1;

		return {
			// make the iterator an iterable
			[Symbol.iterator]() { return this; },

			next() {
				var current = n2;
				n2 = n1;
				n1 = n1 + current;
				return { value: current, done: false };
			},

			return(v) {
				console.log(
					"Fibonacci sequence abandoned."
				);
				return { value: v, done: true };
			}
		};
	}
}; */
/* 
for (var v of Fib) {
	console.log( v );

	if (v > 50) break;
} */

// var tasks = {
//   [Symbol.iterator]() {
//     var steps = this.actions.slice();

//     return {
//       // make the iterator an iterable
//       [Symbol.iterator]() { return this; },

//       next(...args) {

//         if (steps.length > 0) {
// 					let res = steps.shift()( ...args );
// 					return { value: res, done: false };
// 				}
// 				else {
// 					return { done: true }
// 				}
//       },

//       return(v) {
//         console.log(
//           "Fibonacci sequence abandoned."
//         );

//         steps.length = 0; 
//         return { value: v, done: true };
//       }
//     };
//   },
//   actions:[]
// };

// tasks.actions.push(
// 	function step1(x){
// 		console.log( "step 1:", x );
// 		return x * 2;
// 	},
// 	function step2(x,y){
// 		console.log( "step 2:", x, y );
// 		return x + (y * 2);
// 	},
// 	function step3(x,y,z){
// 		console.log( "step 3:", x, y, z );
// 		return (x * y) + z;
// 	}
// );

// var it = tasks[Symbol.iterator]();

// it.next( 10 );			// step 1: 10
// 						// { value:   20, done: false }

// it.next( 20, 50 );		// step 2: 20 50
// 						// { value:  120, done: false }

// it.next( 20, 50, 120 );	// step 3: 20 50 120
// 						// { value: 1120, done: false }

// it.next();	


// var a = [1, 2, 3, 4, 5];
// var it = a[Symbol.iterator]();
// var [x, y] = it; // just take first two element so of js
// var [z, ...w] = it; //it; jsut take third and rest of the parameter
//is `it` fully exhausted? Yep.
//  it.next();				// { value: undefined, done: true }

// console.log(x, y, z, w);

//Yeid delegation

// function* foo() {

// 	yield 1;
// 	yield 2;
// 	yield 3;
// 	return  4;
// }
// function* bar() {
// 	var x = yield* foo();
// 	console.log("x :", x);
// }
// for (var v of bar()) {
// 	console.log( v );
// }

//recousice yeild * 
// function* foo ( x ) {

// 	if (x < 3) {
// 		x = yield* foo(x + 1);
// 	}
// 	return  x * 2;
// }
// foo( 1 );

//  var it = foo(1 );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );

// for( var v of foo(1) ){
// 	console.log( v );
// }

//


// function* foo() {
// 	var x = yield 1;
// 	var y = yield 2;
// 	var z = yield 3;
// 	console.log(x, y, z);
// }

// var it = foo();
// console.log(it.next('foo'));
// console.log(it.next('foo'));
// console.log(it.next('bar'));
// console.log(it.next('baz'));
// console.log(it.next());


// function* foo() {
// 	try {
// 		yield 1;
// 		yield 2;
// 		yield 3;
// 	} finally {
// 		console.log('cleanup!');
// 	}
// }
// for (var v of foo()) {
// 	console.log(v);
// }
// var it = foo();
// it.next();
// it.return(42);
// function* foo() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// var it = foo();

// it.next();				// { value: 1, done: false }

// try {
// 	it.throw("Oops!");
// }
// catch (err) {
// 	console.log(err);	// Exception: Oops!
// }

// console.log(it.next());

// function* foo() {
// 	try {
// 		yield 1;
// 	}
// 	catch (err) {
// 		console.log(err);
// 	}

// 	yield 2;

// 	throw "Hello!";
// }
// var it = foo();
// console.log(it.next());
// try {

// 	it.throw('hi');
// 	it.next();
// 	console.log('never gets here');

// } catch (err) {
// 	console.log(err);
// }
// function* foo() {
// 	try {
// 		yield 1;
// 	}
// 	catch (err) {
// 		console.log(err);
// 	}

// 	yield 2;

// 	throw "foo: e2";
// }

// function* bar() {
// 	try {
// 		yield* foo();

// 		console.log("never gets here");
// 	}
// 	catch (err) {
// 		console.log(err);
// 	}
// }
// var it = bar();

// try {
// 	it.next();
// 	it.throw('e1');

// } catch (err) {

// 	console.log('never get here');
// }
// console.log(it.next());
/* 
function foo() {

	function nextState(v) {
		switch (state) {
			case 0:
				state++;
				// the yeild expression 	
				return 42;
			case 1:
				state++;
				//yeid express fullfiled
				x = v;
				console.log(x);
				//the implictly `return`
				return undefined;
			// no need to handel state
		}

	}
	var state = 0, x;
	return {
		next: function (v) {
			var ret = nextState(v);
			return { value: ret, done: (state == 2) };
		}
	}
}

var it = foo();
console.log(it.next());
console.log(it.next(10)); */
//New way of module pattern

//Classes

class Foo {
	constructor(a, b) {

		this.x = a;
		this.y = b;
	}
	gimmXY() {
		return this.x * this.y;
	}

}

// var f = new Foo(2, 3);
// console.log(f.gimmXY());


// class Bar extends Foo {
// 	constructor(a, b, c) {
// 		super(a, b);
// 		this.z = c;
// 	}

// 	gimmXY() {
// 		return super.gimmXY() * this.z;
// 	}
// }


// var b = new Bar(2, 3, 4);
// console.log(b.gimmXY());

// class PattenA {
// 	constructor() { this.id = 'a' }
// 	foo() { console.log("Parrent a:", this.id) }
// }

// class PattenB {
// 	constructor() { this.id = 'b' }
// 	foo() { console.log("Parrent B:", this.id) }
// }

// class ChildA extends PattenA {
// 	foo() {
// 		super.foo();
// 		console.log('Child a', this.id)
// 	}

// }

// class ChildB extends PattenB {
// 	foo() {
// 		super.foo();
// 		console.log('ChildB', this.id);
// 	}
// }
// var a = new ChildA();
// a.foo();
// var b = new ChildB();
// b.foo();

///