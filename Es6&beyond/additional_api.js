//Arrai,of satatic function
// var a = Array(3);
// console.log(a.length);
// console.log(a[0]);

// var b = Array.of(3);
// console.log(b.length);
// console.log(b[c]);

// var c = Array.of(1, 2, 3);
// console.log(c.length);
// console.log(c);

// 
// var x = new MyArary( 3 );
//x.length;
//x.size;

// var y=  [3];
// console.log( y );
//y.sum(); // sum is not function 


// var  z = MyArary.of(3);//
//  z.length; //1
//console.log( z.sum() );   //3


//Array#form
// array-like object
// var arrLike = {
//   length: 3,
//   0: "foo",
//   1: "bar",
// }
//var arr = Array.prototype.slice.call( arrLike);

//var arr2 = arr.slice();
//new way 
// var arr = Array.from(arrLike);
// var arrCopy = Array.from(arr);

// console.log( arr 
// );

// var arrLike = {
// 	length: 4,
// 	2: "foo"
// };

// var a = Array.from( arrLike );

// console.log( a );

// var a = Array( 4 );								// four empty slots!

// var b = Array.apply( null, { length: 4 } );		//
// console.log( b );

// new way 
// var c = Array.from( { length: 4 } );			// four `undefined` values

// console.log(c );

//Mapping
// var arrLike = {
//   length: 4,
//   2: "foo"
// };

//  var mapArr= Array.from(arrLike, function mapper(val, idx) {
//   if (typeof val === 'string') {
//     return val.toUpperCase();
//   }
//   else {
//     return idx;
//   }
// });

// console.log( mapArr );


// class MyCoolArray extends Array {

// }
// var x = new MyCoolArray(1, 2, 3);
//console.log( x.slice(1) instanceof MyCoolArray );// true

// @@spices help us to change the 
// class MyCoolArray extends Array {
//   static get [Symbol.species]() { return Array };
// }
// var x = new MyCoolArray(1, 2, 3);

// console.log(x.slice(1) instanceof MyCoolArray);// false
// console.log(x.slice(1) instanceof Array);// true

// MyCoolArray.from( x ) instanceof MyCoolArray;		// true
// MyCoolArray.of( [2, 3] ) instanceof MyCoolArray;	// true

//Array fill  

// var a = Array(4).fill(undefined);
// console.log(a);

// var b = [null, null, null, null].fill(42, 1, 3);
// console.log( b );


//Find method
// var a = [1, 2s, 3, 4, 5];

// (a.indexOf( 3 ) != -1);				// true
// (a.indexOf( 7 ) != -1);				// false

// (a.indexOf( "2" ) != -1);			// false

// var _a = a.find(function (val) {
// return val === 2;   // true
// });

// var ab = a.find(function (val) {
//   return val === 7;   // undifiend // falsy value
// });

// console.log(_a, ab);

// var points = [
//   { x: 10, y: 20 },
//   { x: 20, y: 30 },
//   { x: 30, y: 40 },
//   { x: 40, y: 50 },
//   { x: 50, y: 60 }
// ];

//  var asd = points.find(function matcher(obj) {
//   return (obj.x ==30 && obj.y == 40);
// });
// console.log( asd ); 
//findIndex


// var points = [
// 	{ x: 10, y: 20 },
// 	{ x: 20, y: 30 },
// 	{ x: 30, y: 40 },
// 	{ x: 40, y: 50 },
// 	{ x: 50, y: 60 }
// ];

// console.log (points.findIndex( function matcher(point) {
// 	return (
// 		point.x % 3 == 0 &&
// 		point.y % 4 == 0
// 	);
// } ) );								// 2

// console.log( points.findIndex( function matcher(point) {
// 	return (
// 		point.x % 6 == 0 &&
// 		point.y % 7 == 0
// 	);
// } ) );	

// eniteries key values
// var a = [1, 2, 3];
// console.log('keys', [...a.keys()])
// console.log('values', [...a.values()]);
// console.log('entires', [...a.entries()]);

// console.log( 'symbol iterator', [ ...a[Symbol.iterator]()] );

// var a = [];
// a.length = 3;
// a[1] = 2;

//  console.log('keys', [...a.keys()])
//  console.log('values', [...a.values()]);
//  console.log('entires', [...a.entries()]);

//Object 

// var x = NaN, y = 0, z = -1;
// console.log(x === x);
// console.log(y === z);
// console.log( Object.is( x, x));
// console.log(Object.is( y, z));

//Object..getOwnPropertySymbols

// var a = {
//   foo: 42,
//   [Symbol('bar')]: 'hello word',
//   baz: true,
// };
//console.log(Object.getOwnPropertySymbols(a));

//setProtottypeof 
// var o1 = {
//   foo() {
//     console.log("foo");
//   }
// };
// // var o2= {};

// // Object.setPrototypeOf( o2, o1 );

// var o2 = Object.setPrototypeOf({
//   //p2 definination
// }, o1);
// o2.foo();
//Object assign
var target = {},
  o1 = { a: 1 }, o2 = { b: 2 },
  o3 = { c: 3 }, o4 = { d: 4 };
//setup read onl porperty 
Object.defineProperty(o3, "e", {
  value: 5,
  enumerable: false,
  writable: false,
  configurable: false,
});

// //set up non enmmrable propert
// Object.defineProperty(o3, 'f', {
//   value: 6,
//   enumerable: false
// });

// o3[Symbol('g')] = 7;

// //setup non enumrable symbol
// Object.defineProperty(o3, Symbol('h'), {
//   value: 8,
//   enumerable: false
// });
// Object.setPrototypeOf(o3, o4);

// Object.assign(target, o1, o2, o3);
// // console.log(target.a);
// // console.log(target.b);
// // console.log(target.c);
// // Object.getOwnPropertyDescriptor(target, "e");
// Object.getOwnPropertyDescriptor(target, "e");
// console.log( Object.getOwnPropertySymbols( target ) );

// var o1 = {
//   foo() {
//     console.log('foo');
//   }
// };
// var o2 = Object.assign(
//   Object.
// create(o1), {

//   });
// o2.foo();

// var a = NaN, b = "NaN", c = 42;

// console.log( isNaN( a ) ); // truew
// console.log( isNaN( b ) ); // // Oops true
// console.log( isNaN( c ) ); // false
// console.log( Number.isNaN( a ) );
// console.log( Number.isNaN( b ) );
// console.log( Number.isNaN( c ) );
// var a = NaN, b = Infinity, c = 42;
// console.log( Number.isFinite( a ) );
// console.log( Number.isFinite( b ) );
// console.log( Number.isFinite( c ) );

// var b = "42";
// console.log(isFinite( b )); // course the value
// console.log( Number.isFinite( b )); // but this not corec the value 
//
// console.log( "foo".repeat( 3 ) );

var palindrome = "step on no pets";

palindrome.startsWith( "step on" );	// true
palindrome.startsWith( "on", 5 );	// true

palindrome.endsWith( "no pets" );	// true
palindrome.endsWith( "no", 10 );	// true

palindrome.includes( "on" );		// true
palindrome.includes( "on", 6 );		// false