/*var s = new String( "Hellom, Sharaz!" );

 console.log( s.toString() );

 console.log( typeof  s ); // Object not String

 console.log(  s instanceof  String);// true
 //Internal [[Class]]
 Object.prototype.toString.call( s ); // "[object String]"*/


//Boxing Wrappers
/*

 var a = "sharaz";
 console.log( a.length ); // 3
 console.log( a.toUpperCase() ) // "ABC")*/

//Object Wrapper Gotchas
/*
 var a = new Boolean( false );

 if (!a) {
 console.log( "Oops" ); // never runs
 }
 */

//If you want to manually box a primitive value, you can use the Object(..) function (no new keyword):

/*
 var a = 'abc';
 var b = new  String( 'abc');
 var c = Object( a );

 console.log( typeof  a);
 console.log( typeof  b);
 console.log( typeof  c);

 b instanceof  String;
 c instanceof  String;

 Object.prototype.toString.call( b );
 Object.prototype.toString.call( c);
 */

//Unboxing
var a = new String('abc' );
var b = new Number( '777' );
var c = new Boolean( true );

//To get primitive value or unboxing we can use valueOf();
console.log( a.valueOf() ); //abc
console.log( b.valueOf() ); //42
console.log( c.valueOf() ); //true
//Unboxing can also happen implicitly, when using an object wrapper value in a way that requires the primitive value.This process (coercion) called (coercion).

var e = new String( 'sharaz');
var d = e + '';   // `d` has the unboxed primitive value "abc"

console.log( e ); //String {"sharaz"}
console.log( d ); //Sharaz
