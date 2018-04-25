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
{

  foo();// opsoite to let

  function foo(){

  }
}
//foo(); //es 6 will be refernce error

if (true) {
	function foo() {
		console.log( "1" );
	}
}
else {
	function foo() {
		console.log( "2" );
	}
}

foo();