
// getting arr buffer 32 our of 256
//only one proptie accessable for buffer

// var buf = new ArrayBuffer(32);
// console.log(buf.byteLength); // 32
// var arr = new Uint16Array(buf);
// console.log(arr.length); // 16


// //Multiple views
// var buf = new ArrayBuffer(2);
// var view8 = new Uint8Array(buf);
// var view16 = new Uint16Array(buf);

//Type array
// var a = new Int32Array(3)
// a[0] = 10;
// a[1] = 20;
// a[2] = 30;

// a.map(function (v) {
//  console.log(v);
// });
//you cant assign more than the type of the array

// var a = new Int8Array(3)
// a[0] = 10;
// a[1] = 20;
// a[2] = 30;


// a.map(function (v) {
//  console.log(v * v);
// });
// //console.log(a);
// // if you want to use 

// var b = Uint16Array.from(a, v => v * v);

// console.log(b);

// var a = [10, 1, 2,];
// a.sort();								// [1,10,2]

// var b = new Uint8Array([10, 1, 2]);
// b.sort();	


//Maps
// var m = {};

// var x = { id: 1 },
//  y = { id: 2 };

// m[x] = "foo";
// m[y] = "bar";

// m[x];							// "foo"
// m[y];	 //bar

// console.log(m[x], m[y], m);

// var keys = [], val = [];
// var x = { id: 1 }, y = { id: 2 };

// key.push(x);
// val.push('foo');

// key.push(y);
// val.push('bar');
// key [0] === x ; true
// val[0] ; // foo
// key[ 1 ] === y ; // true
// val[1]; //bar
//Maps values
var m = new Map();

var x = { id: 1 },
  y = { id: 2 };

m.set(x, "foo");
m.set(y, "bar");

// var vals = [...m.values()];
// console.log(vals);

// var new_vals = Array.from(vals);
// console.log(new_vals);

console.log(m.entries());
var vals = [...m.entries()];

vals[0][0] === x;
console.log(vals[0][1]);// "foo
console.log(vals[1][0] === y);
console.log(vals[1][1]);
