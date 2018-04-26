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


function foo( ...args ){

  args.shift();//discarding furst element
  console.log( ...args);
}

//old way to use ...operator
function bar(){
  //turun arguments into reak arral
  var args= Array.prototype.slice.call( arguments);

  args.push( 4, 5);
  // filter out odd numbers
	args = args.filter( function(v){
		return v % 2 == 0;
  } );  

  // pass along all of `args` as arguments
	// to `foo(..)`
	foo.apply( null, args );
}
bar(0,1,2,3,4) ;