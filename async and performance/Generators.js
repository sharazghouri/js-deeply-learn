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
/* function *main() {
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
} */
//Generator + promises
/* 

 function foo() {
		return fetch( api ).then(function( data){
		 return data.json();
		});
}



function *main() {
	try {
		var text = yield foo( );
	
		
		console.log( text );
		
		
	}
	catch (err) {
		console.error( err );
	}
}
var it = main();

var p = it.next().value;


// wait for the `p` promise to resolve
p.then(function(text){
	
		 
    it.next(  text );
	},
	function(err){
		it.throw( err );
	}
);
 */
//Asunc and wait
/* function foo(x,y) {
	return fetch( api ).then(function( data){
		 return data.json();
	});
}

async function main() {
	try {
		var text = await foo( 11, 31 );
		console.log( text);
		}
	catch (err) {
		console.error( err );
	}
}

main(); 


 */

 //Generator delegation
/* 
 function * bar(){
	 console.log( 'run start bar');
	 yield 3;
	 yield 4;
	 console.log( 'run finish bar');
 }
 function*foo( ){

	yield 1;
	yield 2;
	yield *bar();
	yield 5;
	
 }

it = foo();
console.log(it.next().value );	// 1
console.log(it.next().value );	// 2
console.log(it.next().value );	// `*foo()` starting
					// 3
console.log(it.next().value );	// 4
console.log(it.next().value );	// `*foo()` finished
*/
// Delegation messages
/* function *foo() {
	console.log( "inside `*foo()2`:",  yield "B" );

	console.log( "inside `*foo()3`:", yield "C" );

	return "D";
}
 */
/* function *bar() {
	console.log( "inside `*bar()1`:", yield "A" );

	// `yield`-delegation!
	console.log( "inside `*bar()4`:", yield *foo() );

	console.log( "inside `*bar()5`:", yield "E" );

	return "F";
} */
/* 
var it = bar();

console.log( "outside:", it.next().value );//A

console.log( "outside:", it.next(1).value );
// inside `*bar()`: 1
// outside: B
console.log( "outside:", it.next( 2 ).value );
// inside `*foo()`: 2
// outside: C
console.log( "outside:", it.next( 3 ).value );
// inside `*foo()`: 3
// inside `*bar()`: D
// outside: E
console.log( "outside:", it.next( 4 ).value );
// inside `*bar()`: 4
// outside: F
 */
//Exception delegation to 

function *foo(){
	try{
		yield "B";
	}
	catch( err ){
		console.log( "error caught inside `*foo()`:", err );
	}
	yield c;
	throw d;
}

function *bar(){
	yield 'A';

	try{
		yield *foo();
	}catch( err ){
		console.log( "error caught inside `*bar()`:", err );
	}

	yield "E";
	yield *baz();

//you can't get here
	yield "G";
}

function *baz(){
	throw "F";
}

var it = bar();


console.log( "outside:", it.next().value );
// outside: A

console.log( "outside:", it.next( 1 ).value );
// outside: B

console.log( "outside:", it.throw( 2 ).value );
// error caught inside `*foo()`: 2
// outside: C

console.log( "outside:", it.next( 3 ).value );
// error caught inside `*bar()`: D
// outside: E

try {
	console.log( "outside:", it.next( 4 ).value );
}
catch (err) {
	console.log( "error caught outside:", err );
}
// error caught outside: F