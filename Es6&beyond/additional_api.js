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

class MyArary extends Array {
  sum() {
    return this.reduce(function reducer(acc, curr) {

      return acc + curr;
    }, 0);

  };
}

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

