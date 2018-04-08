//RUN TO COMPLESTION
/* 
var x = 1;
function foo(){
  x++;
  bar();
  console.log( 'x',x ); //3
}

function bar(){
  x++;
}

foo(); */
//GENERATOR EXAMPLE

/* 
var x = 1;

function*foo() {
	x++;
	yield; // pause!
	console.log( "x:", x );
}

function bar() {
	x++;
}

// construct an iterator `it` to control the generator
var it = foo();

// start `foo()` here!
it.next();
x;						// 2
bar();
console.log(x);						// 3
it.next();	
 */


 ///Input and OUtput

 /* function *foo( x, y ){
  return ( x * y );
 }
 var it = foo( 5 , 6 );
 var res = it.next();
 console.log( res.value ); //30
  */
 //Iteration Messaging
 /* function *foo ( x ){
   var y = x * ( yield );
   return y ;

 }

 var it = foo( 6 );
 it.next();
 var res = it.next( 5 );

 console.log( res );//30

  */
/* 
  function*bar( x ){
    var y = x * ( yield  "hello");
   return y ;
  }

  var it  = bar( 5 );
  var res = it.next();//  -- yield .. as an expression can send out messages in response to next(..) calls, 
  console.log( res.value );
  var res = it.next (3);//  -- yield .. as an expression can send out messages in response to next(..) calls, 
  console.log( res.value );
 */

//Multiple iterator
/* function * foo(){
 var x = yield 2 ;
 z++;
 var y =yield ( x * z);
 console.log( x, y , z );
}
var z = 1;
var it1 = foo();
var it2 = foo();

var val1 = it1.next().value;
console.log( 'val1', val1 ); // 2

var val2 = it2.next().value;
console.log( 'val2', val2 ); //2

val1 = it1.next( val2 * 10 ).value; // 40   <-- x:20,  z:2
console.log( 'val1', val1 ); // 2
val2 = it2.next( val1 * 5 ).value;		// 600 <-- x:200, z:3
console.log( 'val2', val2 ); //2
it1.next( val2 / 2 );					// y:300 // 20 300 3
console.log( 'val1', val1 ); // 2
it2.next( val1 / 4 );					// y:10 // 200 10 3
console.log( 'val2', val2 ); //2
  */
//Iteraor helper
/* var a = 1;
var b = 2;

function *foo() {
	a++;
	yield;
	b = b * a;
	a = (yield b) + 3;
}

function *bar() {
	b--;
	yield;
	a = (yield 8) + b;
	b = a * (yield 2);
}

 function step( gen ){
   var it = gen();
   var last;
   return function(){
          // whatever is `yield`ed out, just
          // send it right back in the next time!
          last = it.next( last ).value;
          console.log( last );
   }

 }
 */
/*  var s1 = step( foo );
 var s2 = step( bar );  
 //Run `*foo` completely
 s1();
 s1();
 s1();
 console.log( a, b );
 // now run `*bar()`
s2();
s2();
s2();
s2();

console.log( a, b ); */

// make sure to reset `a` and `b`
/* a = 1;
b = 2;

var s1 = step( foo );
var s2 = step( bar ); */

//s2();		// b--;
// s2();		// yield 8
// s1();		// a++;
// s2();		// a = 8 + b;
			// yield 2
// s1();		// b = b * a;
			// yield b
// s1();		// a = b + 3;
// s2();		// b = a * 2;
// console.log( a, b );


//Producer and iterator
/* var gimmeSomething = (function(){
	var nextVal;

	return function(){
		if (nextVal === undefined) {
			nextVal = 1;
		}
		else {
			nextVal = (3 * nextVal) + 6;
		}

		return nextVal;
	};
})();

gimmeSomething();		// 1
gimmeSomething();		// 9
gimmeSomething();		// 33
gimmeSomething(); // 135 */

/* var a = [1,3,5,7,9];

for (var v of a) {
	console.log( v );
}
// 1 3 5 7 9
 */

 //Stopping Generator
/* function *something() {
	try {
		var nextVal;

		while (true) {
			if (nextVal === undefined) {
				nextVal = 1;
			}
			else {
				nextVal = (3 * nextVal) + 6;
			}

			yield nextVal;
		}
	}
	// cleanup clause
	finally {
		console.log( "cleaning up!" );
	}
}
var it = something();
for (var v of it) {
	console.log( v );

	// don't let the loop run forever!
	if (v > 500) {
		console.log(
			// complete the generator's iterator
			it.return( "Hello World" ).value  
		);
		// no `break` needed here
	}
}
 */// 1 9 33 105 321 969
// cleaning up!
// Hello World
//Iterating Generator Asynchronosly.
var api= "https://central.wordcamp.org/wp-json/wp/v2/wordcamps";

/* function foo(x,y){

  $.get( api , function( data, status_text ){

    if( status_text !== 'success' ){
      it.throw( status_text ); 
    }else{
      it.next( data );
    }
  });

}

function * main(){
  try {
    var text = yield foo (11 , 13 );
    console.log( text );
  }catch( err ){
    console.error( err );
  }
}
var it  = main();
it.next(); */

/* function *main() {
	var x = yield "Hello World";

	yield x.toLowerCase();	// cause an exception!
}

var it = main();

it.next().value;			// Hello World

try {
	it.next( 42 );
}
catch (err) {
	console.error( err );	// TypeError
} */
function *main() {
	var x = yield "Hello World";

	// never gets here
	console.log( x );
}

var it = main();

it.next();

try {
	// will `*main()` handle this error? we'll see!
	it.throw( "Oops" );
}
catch (err) {
	// nope, didn't handle it!
	console.error( err );			// Oops
}