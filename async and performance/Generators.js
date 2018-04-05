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

  function*bar( x ){
    var y = x * ( yield  "hello");
   return y ;
  }

  var it  = bar( 5 );
  var res = it.next();//  -- yield .. as an expression can send out messages in response to next(..) calls, 
  console.log( res.value );
  var res = it.next (3);//  -- yield .. as an expression can send out messages in response to next(..) calls, 
  console.log( res.value );
