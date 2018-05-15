
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

var a = new Int8Array(3)
a[0] = 10;
a[1] = 20;
a[2] = 30;


a.map(function (v) {
 console.log(v * v);
});
//console.log(a);
// if you want to use 

var b = Uint16Array.from(a, v => v * v);

console.log(b);