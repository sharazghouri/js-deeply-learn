//use of let
/* var  a= 2;
{

  
  let a =3; 
  console.log(a ,'inside block');
}
console.log(a ,'ouside block'); */
/* 
{
  console.log( a );
  console.log( b );
  
  var a;
  let b;

} */
// {
// 	// `a` is not declared
// 	if (typeof a === "undefined") {
// 		console.log( "cool" );
// 	}

// 	// `b` is declared, but in its TDZ
// 	if (typeof b === "undefined") {		// ReferenceError!
//     // ..
//     console.log( "cool" );
// 	}

// 	// ..

// 	let b;
// }
//use of const

// {
//   const ASD ='asd';
//   console.log( ASD );
//   //ASD =3; //type error.
// }
//Block scoped functions
// {

//   foo();// opsoite to let

//   function foo(){

//   }
// }
// //foo(); //es 6 will be refernce error

// if (true) {
// 	function foo() {
// 		console.log( "1" );
// 	}
// }
// else {
// 	function foo() {
// 		console.log( "2" );
// 	}
// }

// foo();
//Spread/Rest Operator
// function foo( x, y ,z){
// console.log( x,y,z);
// }
// foo(...[1,2,3]);

// //exapnd value
// var a = [2,3,4];
// var b= [1, ...a,5];
// console.log(b);
// //get and set falue in array using function call
// function bar( x, y, ...z){
//   console.log(x,y,z);
// }
// bar(1,2,3,4,5);
// //bar(1,2,3,{a:3,b:4});

// function sar( ...args ){
//   console.log(args);
// }
// sar(2,3,4,5,6);


// function foo( ...args ){

//   args.shift();//discarding furst element
//   console.log( ...args);
// }

// //old way to use ...operator
// function bar(){
//   //turun arguments into reak arral
//   var args= Array.prototype.slice.call( arguments);

//   args.push( 4, 5);
//   // filter out odd numbers
// 	args = args.filter( function(v){
// 		return v % 2 == 0;
//   } );  

//   // pass along all of `args` as arguments
// 	// to `foo(..)`
// 	foo.apply( null, args );
// }
// bar(0,1,2,3,4) ;


//Default parameter

// function foo( x,y){
//   x = x || 11;
//   y = y || 31;
//   console.log( x + y );
// }
// foo(5 , 6);
// foo(5 );
// foo(null,6 );
// foo();

// foo( 0, 42 );	// Dangarse look like if you paas falsy value  Oops 53  but correct 42

//Solution of the above value.
// function foo(x, y) {
//   x = (x !== undefined) ? x : 11;
//   y = (y !== undefined) ? y : 31;

//   console.log(x + y);
// }

// foo(0, 42);			// 42
// foo(undefined, 6);	// 17

//ES6 this defualt parameter
// function foo( x =11 , y =31){
//   console.log( x + y);
// }
// foo();
// foo(2, 6);
// foo( 0 ,42);

// foo( 5 );
// foo( 5 ,undefined);// 36 <-- `undefined` is missing
// foo( null, 6 );			// 6  <-- null coerces to `0`
//Default value expression
// function bar( val ){
//   console.log('bar called') ;
//   return y + val;
// }
// function foo( x =y+3, z= bar( x )){
//   console.log(x,z);
// }
// var y = 5;
// foo(); // "bar called" 
//         //8,13
// foo(10);//bar called
//           //10,15

// y= 6;  
// foo(undefined,10); //9 ,10
//var w = 1, z = 2;
//DEsctructing
 function bar() {
	return {
		x: 4,
		y: 5,
		z: 6
	};
 }

var tmp = bar(),
	x = tmp.x, y = tmp.y, z = tmp.z;

console.log( x, y, z );	
function foo() {
	return [1,2,3];
}

var tmp = foo(),
a = tmp[0], b = tmp[1], c = tmp[2];

console.log( a, b, c );	

//Es6 solve this problem
var [a,b,c]= foo();
var { x:x,y:y,z:z } =bar();
console.log(a,b,c); 
console.log( x,y,z);
