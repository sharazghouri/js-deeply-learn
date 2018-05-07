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


var a = [1, 2, 3, 4, 5];
var it = a[Symbol.iterator]();
var [x, y] = it; // just take first two element so of js
var [z, ...w] = it; //it; jsut take third and rest of the parameter
// is `it` fully exhausted? Yep.
it.next();				// { value: undefined, done: true }

console.log(x, y, z, w);