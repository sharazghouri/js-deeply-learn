// a.toString(); toString we call explicitly converting non string value to string and
// implicitly called when we call non string value in in string context
/*
 var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
 console.log( a ); //1.07e+21
 a = a.toString();//"1.07e+21"
 console.log( a.toString() );

 var arr = [ 1, 3, 4, 5  ];
 console.log( arr );//(4) [1, 3, 4, 5]
 console.log( arr.toString() );// (4) [1, 3, 4, 5]
 */

//JSON Stringification  except that the serialization result is always a string:

/*
 console.log(JSON.stringify( 42 ));      //"42"
 console.log(JSON.stringify( "42" ));    //""42""
 console.log(JSON.stringify( true ));    //"true"
 console.log(JSON.stringify( null ));    //"null"

 //Some Special cases
 console.log( JSON.stringify( undefined ) ); //undefined
 console.log( JSON.stringify( function () {} ) );//undefined
 console.log( JSON.stringify( [1,undefined,function(){},4] ) );//[1, null, null, 4]
 console.log( JSON.stringify( { a:2, b:function () {}} ) );//{a:2}
 */
/*

 var o={};

 var a={
 b:42,
 c:o,
 d:function () {}
 };
 //create circular reference inside `a`
 o.e = a;
 //would through an error circular reference
 //JSON.stringify( a );
 //define custom value serialization
 a.toJSON= function () {
 // only include `b` for serialization
 return {b:this.b};
 };
 console.log( JSON.stringify( a ) );
 */

//Second argument of the function

/*
 var a ={
 b: 42,
 c: '42',
 d:[ 1,2,3 ]
 };

 console.log( JSON.stringify( a,[ "b", "c" ] ) ); //{"b":42,"c":"42"}
 var result = JSON.stringify(a, function (k , v) {
 if( k !== "c" ){
 return v;
 }
 });
 console.log( result );
 */
//Third parameter for the indedenation in JSON.Stringify();
/*

 var a = {
 b: 42,
 c: "42",
 d: [1,2,3]
 };
 console.log( JSON.stringify(a,null,3) );
 // {
 //     "b": 42,
 //     "c": "42",
 //     "d": [
 //     1,
 //     2,
 //     3
 // ]
 // }
 console.log( JSON.stringify(a,null,'---') );
 // {
 //     ---"b": 42,
 //     ---"c": "42",
 //     ---"d": [
 //     ------1,
 //     ------2,
 //     ------3
 //     ---]
 // }


 */
//Number : if you want to convert in Number two function valueOf or toString Use
/*
 var a ={
 valueOf:function () {
 return '42';
 }
 };
 var b ={
 toString:function () {
 return '42';
 }
 };
 var c=[ 4, 2];
 c.toString= function () {
 return this.join('');
 };

 console.log( Number(a) );//42
 console.log( Number(b) );//42
 console.log( Number(c) );//42
 console.log( Number("") );//0
 console.log( Number([]) );//0
 console.log( Number(["abc"]) );//Nan

 */

//Boolean
/*
 From that table, we get the following as the so-called "falsy" values list:

 undefined
 null
 false
 +0, -0, and NaN
 ""*/


//FALSY VALUE
/*
 var a = new Boolean( false );
 var b = new Number( 0 );
 var c = new String( '' );

 var d = Boolean( a && b && c);
 */

//Truth value
/*var a = new Boolean( 'false' );
 var b = new Number( '0' );
 var c = new String( "''" );

 var d = Boolean( a && b && c);
 console.log( d );*/
//Other Truthy
/*

 var a =[];
 var b ={};
 var c =function () {};
 var d = Boolean( a && b && c);
 console.log( d );
 */

//Date To number
/*
 var d = new Date( "Mon, 18 Aug 2014 08:53:06 CDT" );
 console.log( +d );
 */
// index of as bollean check of presence/absence
/*var a ="Hello word";
 if( a.indexOf( 'lo') > 0){
 //found
 console.log( "a.indexOf( 'lo') > 0",a.indexOf( 'lo') );
 }

 if ( a.indexOf('lo') != -1 ){
 //found
 console.log( "a.indexOf('lo') != -1", a.indexOf('lo') );
 }
 if ( a.indexOf('lo') < 0 ){
 //not found
 console.log( "a.indexOf('lo') < 0", a.indexOf('lo') );
 }
 if ( a.indexOf('lo') < 0== -1 ){
 //not found
 console.log( "a.indexOf('lo') == ", a.indexOf('lo') );
 }*/
/////////////////////////////////////////////////

//~ = -(  x + 1 );
/*
 var a = "Hello index";
 console.log( ~ a.indexOf( "lo") ,'truthy value'); //-4 ->truthy value

 if (  ~ a.indexOf( "lo") ){
 console.log( "Found in it" );
 }

 console.log( ~ a.indexOf( "ol") ,'falsy value'); //-0 ->truthy value
 console.log( ! ~ a.indexOf( "ol") ,'convert to truhty  value'); //-1 ->truthy valeC

 if( ! ~ a.indexOf( "ol") ){

 console.log( "NOt found");
 }

 */
//Math floor with ~~
/*
 console.log( "Math Floor -49.6", Math.floor( -49.6) );
 console.log( "~~ -49.6",  ~~-49.6 );*/

//ParseInt

/*console.log(parseInt( 1/0, 19 )); // parseInt( "Infinity", 19 ) I character value 19 and n is invalid character
 console.log(parseInt( 0.000008 ));		// 0   ("0" from "0.000008")
 console.log(parseInt( 0.0000008) );		// 8   ("8" from "8e-7")
 console.log(parseInt( false, 16) );		// 250 ("fa" from "false")
 console.log(parseInt( parseInt, 16 ));	// 15  ("f" from "function..")
 console.log(parseInt( "0x10" ));			// 16
 console.log(parseInt( "103", 2 ));       //2*/
//Boolean
/*var a = "0";
 var b = [];
 var c = {};

 var d = "";
 var e = 0;
 var f = null;
 var g;

 Boolean( a ); // true
 Boolean( b ); // true
 Boolean( c ); // true
 Boolean( d ); // false
 Boolean( e ); // false
 Boolean( f ); // false
 Boolean( g ); // false
 //Alternate way to use // like +
 !!a;	// true
 !!b;	// true
 !!c;	// true

 !!d;	// false
 !!e;	// false
 !!f;	// false
 !!g;	// false*/
//Explicitly coercion Boolean

/*var  sa =[
 1, function () {

 },
 2,
 function () {

 }
 ];
 var sb = JSON.stringify( sa, function (key ,val ) {

 if( typeof  val == 'function'){
 return !!val;
 }else {
 return val;
 }
 } );
 console.log( sb );
 */

//Implicitly converstion

/*
var a = '4';
var b = '20';
console.log(a + b);
var c = 4;
var d = 20;
console.log( c + d);
*/

/*var e = [ 1,2];
var f =[ 3,4];
console.log( e +f );*/

//String to Number
/*
var d = '3';
var f = 2;
console.log( d- f);

var a = [3];
var b = [1];

console.log( a - b ); // 2
*/
//Implicitly Boolean

/*
var a = 42;
var b ='abc';
var c;
var d = null;

if (a) {
    console.log( "yep 1" );		// yep
}

while (c) {
    console.log( "nope, never runs" );
}

c = d ? a : b;
c;					// "abc"

if ((a && d) || c) {
    console.log( "yep 3" );		// yep
}*/
//Logical operator
/*
var a = 42;
var b = 'abc';
var c = null;
c || b;		// "abc"
c && b;		// null
console.log( a || b);

console.log( a && b);*/
/*
function foo() {
    console.log( a );
}

var a = 42;

a && foo(); // 42*/


