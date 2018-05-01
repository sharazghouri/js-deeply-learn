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

// var tmp = bar(),
// 	x = tmp.x, y = tmp.y, z = tmp.z;

// console.log( x, y, z );	
function foo() {
  return [1, 2, 3];
}

// var tmp = foo(),
// a = tmp[0], b = tmp[1], c = tmp[2];

// console.log( a, b, c );	

// //Es6 solve this problem
// var [a,b,c]= foo();
// var { x:x,y:y,z:z } =bar();
// console.log(a,b,c); 
// console.log( x,y,z);

// var { x,y,z} =bar();
// console.log(x,y,z);
// var { x:bam,y:baz,z:bap} =bar();
// console.log( bam,baz,bap);
// console.log(x,y,z);

// var aa = 10, bb = 20;
// var o = { x: aa, y: bb };
// var {x:AA,y:BB}=o;

// console.log( AA); //10
// /Object Property Assignment Pattern. 


// var o = {};
// [o.a,o.b,o.c] = foo();
// ({x:o.x,y:o.y,z:o.z} = bar());
// console.log(o.a,o.b,o.c);
// console.log(o.x,o.y,o.z);

// var o1 = { a: 1, b: 2, c: 3 }, o2 = {};
// ({ a: o2.x, b: o2.y, c: o2.z } = o1);

// console.log(o2.x, o2.y, o2.z);
// //or
// var o1 = { a: 1, b: 2, c: 3 }, o2 = [];
// ({ a: o2[0], b: o2[1], c: o2[2] } = o1);

// console.log(o2);

// //or
// var a1 = [1, 2, 3], o2 = {};
// [o2.a, o2.b, o2.c] = a1;
// console.log( o2.a, o2.b, o2.c );
// //or 
// var a1 = [ 1, 2, 3 ],
// 	a2 = [];

// [ a2[2], a2[0], a2[1] ] = a1;

// console.log( a2 );
// var x = 10, y = 20;

// [ y, x ] = [ x, y ];

// console.log( x, y );	
//REpeat assignment

// var {a:X,a:Y}= {a:1};
// console.log( X);
// console.log( Y);
// var { a: { x: X, x: Y }, a } = { a: { x: 1 } };
// console.log(X);
// console.log(Y);
// console.log(a);
// ({ a: X, a: Y, a:[Z] } = { a: [1] });
// console.log(X);
// console.log(Y);
// console.log(a);
//Destructuring Assignment Expressions

// var o = { a: 1, b: 2, c: 3 }, a, b, c, p;
// p ={ a ,b,c } = o; //p assignet object refernce of o
// console.log( a,b, c);
// console.log( p == o);

//Same for Array
// var o = [  1,  2,  3 ], a, b, c, p;
// p =[ a ,b,c ] = o; //p assignet object refernce of o
// console.log( a,b, c);
// console.log( p == o);
//By carrying the object/array value through as the completion, you can chain destructuring assignment expressions together:

// var o = { a: 1, b: 2, c: 3 },
//   p = [4, 5, 6],
//   a, b, c, x, y, z;

// ({ a } = { b, c } = o);
// [x,y] = [z] = p;
// console.log(a, b, c);			// 1 2 3
// console.log(x, y, z);			// 4 5 4



//Too Many, Too Few, Just Enough

// var[,b]= foo();
// var { x,z} = bar();
// console.log( b,x,z); // 1 4 6

// var[,,c,d]= foo();
// var { w,z} = bar();
// console.log( c,z); // 3 6
// console.log( d,w); // undefiend undefiend


// var a = [2, 3, 4];
// var [b, ...c] = a;
// console.log(b, c);
//Default Value Assignment
// var [ a = 3, b = 6, c = 9, d = 12 ] = foo();
// var { x = 5, y = 10, z = 15, w = 20 } = bar();

// console.log( a, b, c, d );			// 1 2 3 12
// console.log( x, y, z, w );			// 4 5 6 20
// //You can combine the default value assignment with the alternative assignment expression syntax covered earlier. For example:

// var { x, y, z, w: WW = 20 } = bar();

// console.log( x, y, z, WW );

//easiler to under stand

// var X = 300, Y = 200, Z = 100;
// var o1 = { x: { y: 42 }, z: { y, z } };
// ({ y: x = { y: y } } = o1);
// ({ z: y = { y: z } } = o1);
// ({ x: z = { y: x } } = o1);

//Nested Destrucring 
// var a1 = [1, [2, 3, 4], 5];
// var o1 = { x: { y: { z: 6 } } };
// var [a, [b, c, d], e] = a1;
// var { x: { y: { z: w } } } = o1;
// console.log(a, b, c, d, e); //1,2,3,4,5
// console.log(w);
// //Nested destructuring can be a simple way to flatten out object namespaces. For example:
// var App = {
// 	model: {
// 		User: function(){  console.log('hello') }
// 	}
// };

// // instead of:
// // var User = App.model.User;

// var { model: { User } } = App;

// console.log(User);

//Destructing para meter
// function foo( [ x, y ] ) {
// 	console.log( x, y );
// }

// foo( [ 1, 2 ] );					// 1 2
// foo( [ 1 ] );						// 1 undefined
// foo( [,2] );  //  undefined 1
// foo( [ ] );  //  undefined  undefined

// function foo({ x, y }) {
//   console.log(x, y);
// }
// foo({ x: 3, y: 4 });
// foo({x:3});
// foo({y:4});
// foo({});
// function f3([ x, y, ...z], ...w) {
// 	console.log( x, y, z, w );
// }

// f3( [] );							// undefined undefined [] []
// f3( [1,2,3,4], 5, 6 );		
//

//Destructuring Defaults + Parameter Defaults
// function f6({ x = 10 } = {}, { y } = { y: 10 }) {

//   console.log(x, y);

// }
// f6();
// f6(undefined, undefined);
// f6({}, undefined);
// f6({}, {});
// f6(undefined, {});
// f6({ x: 2 }, { y: 3 });
// Nested Defaults: Destructured and Restructured

var defaults = {
  options: {
    remove: true,
    enable: false,
    instance: {}
  },
  log: {
    warn: true,
    error: true

  }
};

var config = {
  options: {
    remove: false,
    instance: null
  }
};

// config.options = config.options || {};
// config.options.remove = (config.options.remove !== undefined) ?
//   config.options.remove : defaults.options.remove;
// config.options.enable = (config.options.enable !== undefined) ?
//   config.options.enable : defaults.options.enable;

//Es6 approch
var config = Object.assign({}, defaults, config);

//destructring approch

config.options = config.options || {};
config.log = config.log || {};
({
  options: {
    remove: config.options.remove = defaults.options.remove,
    enable: config.options.enable = defaults.options.enable,
    instance: config.options.instance = defaults.options.instance,
  }

} = config);


//merge default into config
// {
//   //destructer with default value assignments
//   let {
//     options: {
//       remove = defaults.options.remove,
//       enable = defaults.options.enable,
//       instance = defaults.options.instance,
//     } = {},
//     log: {
//       warn = defaults.log.warn,
//       error = defaults.log.error,
//     } = {},
//   } = config,

//     //restructre
//     config = {
//       options: { remove, enable, instance },
//       log: { warn, error }
//     }
//   console.log(config);
// }

// consice propties

//pre es next 
// var x=2,y=3 ,o ={
//   x:x,
//   y:y
// };

// var x =3,y=4, o= {
//   x,
//   y
// };
// console.log(o);

//Concise method
//Pre es6 
// var o = {
//   x: function () { },
//   y: function () { },
// }
// ES nesxt
// var o = {
//   x() { },
//   y() { },
// }
// console.log( o);
//Consisley unnamed

function runSomtething(o) {
  var x = Math.random();
  var y = Math.random();

  return o.something(x, y);

}

// runSomtething({
//   something:function something(x, y){
//     if(x > y){
//       // recursively call with `x`
// 			// and `y` swapped
// 			return something( y, x );
//     }

//     return y-x;
//   }
// });

// runSomtething({
//   something: function something (x, y){
//     if(x > y){
//       // recursively call with `x`
// 			// and `y` swapped
// 			return something( y, x );
//     }
//     return y-x;
//   }
// });
//setter and getter
// var o = {
//   __id: 10,
//   get  id () {
//       return this.__id++;

//   },
//   //set id( { id : v = 0} ){
//   set id( v ){
//     this.__id = v;

//   }
// };

// console.log( o.id ); //10
// console.log( o.id ); //11
//  o.id =20;
//  console.log( o.id ); //20
//  //and
//  console.log( o.id ); //21
//  console.log( o.id ); //21 --still
//Computed Property Names

//ES5
var prefix = 'user_';

var o = {
  baz: function () { }
};

o[prefix + 'foo'] = function () { };
o[prefix + 'bar'] = function () { };
//
//ES6 
var prefix = 'user_';

var o = {
  baz: function () { },
  [prefix + "foo"]: function () { },
  [prefix + "bar"]: function () { }
};

var o = {
  baz: function () { },
  [prefix + "foo"]: function () { }, // concise method
  *[prefix + "bar"]: function() { } // concise generator
};

