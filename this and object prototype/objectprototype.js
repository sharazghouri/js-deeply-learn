
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

//"Constructor" Redux


/*

function  Foo( name ) {
    this.name = name;
    console.log( 'a');
}

Foo.prototype = {};

var a = new Foo( 'a' );
//var a = Object.create( Foo );
console.log( a.constructor === Foo ); // true
console.log( a.constructor === Object ); // false

*/



/*
var foo = {

    something: function() {

        console.log( " Tell me some thing good");
    }
};

function  foo1() {


}

var bar = Object.create( foo );
bar.something();
*/
//Object Create

/*
var anotherObj = {
  a:1
};
var myObj = Object.create( anotherObj ,{
b:{
    enumerable: false,
        writable: true,
    configurable: false,
    value: 3
},
c: {
    enumerable: true,
        writable: false,
        configurable: false,
        value: 4

}
}
);


console.log( myObj.hasOwnProperty( 'a' ) ); //true
console.log( myObj.hasOwnProperty( 'b' ) ); //false
console.log( myObj.hasOwnProperty( 'c' ) ); //false

console.log( myObj.a ); //1
console.log( myObj.b ); //2
console.log( myObj.c ); //3
*/

//Internal Delegation
var anotherObject = {
    cool: function() {
        console.log( "cool!" );
    }
};

var myObject = Object.create( anotherObject );

myObject.doCool = function() {
    this.cool(); // internal delegation!
};

myObject.doCool(); // "cool!"