
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
console.log( "Math Floor -49.6", Math.floor( -49.6) );
console.log( "~~ -49.6",  ~~-49.6 );