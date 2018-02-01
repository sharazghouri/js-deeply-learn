/*
 var myObject = {
 a: 2
 };

 myObject.a;		// 2

 myObject["a"];	// 2   using [] we no need valid idenftiner name like ["Super-Fun"]

 myObject[ "Super-fun!"] = 3;
 myObject[ "Super-fun!"]; // 3
 myObject.Super-fun!; // error vaid idenftiner name error Unexpected token !
 */


/*
var myObject = {
    a: 2
};

console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
// {
//    value: 2,
//    writable: true,
//    enumerable: true,
//    configurable: true
// }


var myObject2 ={};

Object.defineProperties( myObject2, "a" , {
    value : 4,
    writable: false,
    configurable : true,
    enumerable : true

} );

myObject2.a= 5;
console.log( myObject2.a ); //4
*/

/*
If you want to prevent an object from having new properties added to it, but otherwise leave the rest of the object's properties alone, call Object.preventExtensions(..):
*/
/*

var myObject = {
    a : 3
};

Object.preventExtensions( myObject );

myObject.b =4;
console.log( myObject.b ) //undefined;
*/

// get setter


var myObj= {

    get a(){

        return 2;
    },
    set a( val ){
        this._a_ = val * 2;
    }
};

myObj.a = 3;
console.log( myObj.a );//6


myObj.b = 4;
console.log( myObj.b );//4*/

/*

var myObject = {
    a: 2
};

("a" in myObject);				// true
("b" in myObject);				// false

myObject.hasOwnProperty( "a" );	// true
myObject.hasOwnProperty( 'b');  //false


*/







