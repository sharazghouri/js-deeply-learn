
//#1 setting property
/*
var anotherObject = {
 a: 2
 };


 // create an object linked to `anotherObject`
 var myObject = {
 a: 3
 };

 console.log( myObject.a );
 myObject = Object.create( anotherObject );
 myObject.a = 5;
 myObject.__prot__ ; //{ a : 2}
 console.log( myObject.a );//5

 for (var k in myObject) {
 console.log("found: " + k);
 }
*/



//#2 writable property false not creating propety in child ( means myObj will ignore)
/*
var anotherObject = {
    ab: 2
};

Object.defineProperty(anotherObject, 'a', {
    value: 42,
    writable: false
});
// create an object linked to `anotherObject`
var myObject = {
    a: 3
};

console.log( myObject.a );
 myObject = Object.create( anotherObject );
 myObject.a = 5;
console.log( myObject.a );//42

for (var k in myObject) {
    console.log("found: " + k);
}
// found: a*/



// #3 setter function use for object
/*
var anotherObject = {
    a: 2,
    get a(){
      return this._a_;
    },
    set a(val) {
        this._a_ = val *3;
    }
};


// create an object linked to `anotherObject`
var myObject = {
    a: 3,

};

console.log( myObject.a ); //3
myObject = Object.create( anotherObject );
myObject.a= 5;
myObject.__proto__ ; //{ a : 2}
console.log( myObject. a );//15

for (var k in myObject) {
    console.log("found: " + k);
}*/

// Implicitly shadowing

/*

var anotherObject = {
   a:2
};

var  myObject = Object.create( anotherObject );

console.log( anotherObject.a ); //2
console.log( myObject.a );//2

anotherObject.hasOwnProperty( 'a' ); // true
myObject.hasOwnProperty( 'a' ); //false

myObject.a++; // Oops Implicitly shadowing  a = a+1;

console.log( anotherObject.a ); //2
console.log( myObject.a );//3

anotherObject.hasOwnProperty( 'a' ); // true
myObject.hasOwnProperty( 'a' ); //true

*/

//Class Function

/*
function  Foo() {

}
//Foo.prototype;
var a = new Foo();

// we can do in with hero  Object.create();

Object.getPrototypeOf( a ) === Foo.prototype; // true
console.log( Object.getPrototypeOf( a ) === Foo.prototype );
*/


//Constructor

/*
function Foo(){

};
Foo.prototype.constructor;
var a = new Foo();
a.constructor == Foo;
*/

//Conststuctor call of function
/*function NothingSpecial() {
    console.log( "Don't mind me!" );
}

var a = new NothingSpecial();
// "Don't mind me!"

a; // {}*/


//Mechnicas

/*
function  Foo( name ) {
    this.name = name;
    console.log( 'a');
}


Foo.prototype.myName = function () {

    return this.name;
};

var a = new Foo( 'a' );
var b =  new Foo( 'b' );

console.log( a.myName() );
console.log( b.myName() );
*/
// prototype inheritance

function  Foo( name ) {

    this.name = name;

}

Foo.prototype.myName = function ( ) {
    
    return this.name;
}

function  Bar( name , label ) {
    Foo.call( this , name  );
    this.label = label;
}

// Bar Constructor gone if you rely on Bar constructor manually fix the issue
Bar.prototype = Object.create( Foo );

Bar.prototype.myLabel= function () {
    return this.label;
};

var a = new Bar( 'a', 'Obja' );

console.log( a.myName() );
/*
Same as a.myMyname this will work if we create object with direct Foo object with( myName() exist in Foo.prototype );
console.log( a.name );*/
console.log( a.myLabel() );





