

/*
console.log( 0.1 + 0.2 === 0.3 ); // false
0.1+0.3 ; //0.30000000000000004

*/

/*function  Foo() {

    // if strict mode this will not work but if we use var to declare and assing value this will work but this is bad coding practice
    undefined =3;
    console.log( undefined );

}
Foo();*/

// Vlid use to return undefiend  as result of expersion
/*
var hag = 23;
console.log( hag,   hag);
console.log( hag,  void hag);
*/

// Magic With Numbers
/*

var a = 2 /'foo';
typeof  a  === "number";
*/

/*
var a = 2 / "foo"; // NaN

 console.log(  a == NaN ) ;	// false
 console.log(  a === NaN ) ;	// false

console.log( isNaN( a ) ); // true
*/

//Zero magic
console.log( 1 / 0 );  // Positive Infinity
console.log( -1 / 0 );//  Negative Infinity

var a = 0 / -3; // -0
var b = 0 * -3; // -0

function isNegZero(n) {
    n = Number( n );
    return (n === 0) && (1 / n === -Infinity);
}

isNegZero( -0 );		// true
isNegZero( 0 / -3 );	// true
isNegZero( 0 );			// false
