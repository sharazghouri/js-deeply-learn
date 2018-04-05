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

 function *foo( x, y ){
  return ( x * y );
 }
 var it = foo( 5 , 6 );
 var res = it.next();
 console.log( res.value ); //30
 