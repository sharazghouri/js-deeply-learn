/**
 * Created by welcom on 1/21/2018.
 */
//implicit shadowing

/*

var anotherObj = {  a : 4 };

var myObj =  Object.create( anotherObj );

console.log( anotherObj.a );//4
console.log( myObj.a );//4

console.log( anotherObj.hasOwnProperty( 'a' ) ); //true
console.log( myObj.hasOwnProperty( 'a' ) ); // false

//anotherObj.a++;
myObj.a++;


console.log( anotherObj.a );//5
console.log( myObj.a );//4
console.log( myObj.hasOwnProperty( 'a' ) ); // false
*/

//constructor

    /*function Foo(){

    }

    console.log( Foo.prototype.constructor == Foo ); // true

    var a = new Foo();
    console.log( a.constructor == Foo ); // true*/



/*
function NothingSpecial() {
    console.log( "Don't mind me!" );
}

var a = new NothingSpecial();
// "Don't mind me!"

//console.log( a.constructor );

a;
*/
/*
ƒ NothingSpecial() {
    console.log( "Don't mind me!" );
}
*/


/*
function Foo( name ){

    this.name = name;
}
Foo.prototype.myName = function (  )  {
     return this.name ;

};

function Bar( name , label ) {
    Foo.call( this, name );
    this.label = label;
};
// here, we make a new `Bar.prototype`
// linked to `Foo.prototype`

Bar.prototype = Object.create( Foo.prototype );

Bar.prototype.myLabel = function () {
    return this.label;
};
var a = new Bar( 'a', 'Obj a');
console.log( a.myName() );
console.log( a.myLabel() );*/


/*
function Foo (){}

var a = new Foo();

console.log( Foo.prototype );
console.log( a.constructor );

console.log( Object.getPrototypeOf( a ) === Foo.prototype );
*/


///create link

/*
var anotherObject = {
    a: 2
};

var myObject = Object.create( anotherObject, {
    b: {
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
} );

console.log( myObject.hasOwnProperty( 'a' ) );
console.log( myObject.hasOwnProperty( 'b' ) );
console.log( myObject.hasOwnProperty( 'c' ) );

console.log( myObject.a );
console.log( myObject.b );
console.log( myObject.c );*/
// innwe delegTOPN

var anOtherobj =  {
    cool: function () {
        console.log( 'coll!');
    }
};
var myobj = Object.create( anOtherobj );

myobj.doColl = function () {
    this.cool();
};

console.log( myobj.doColl() );