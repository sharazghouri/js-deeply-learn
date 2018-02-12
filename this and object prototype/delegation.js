// Delegation Theory

/*
var Task = {
    setId : function ( ID ) {
         this.id = ID;
    },
   outputID : function () {
          console.log( this.id );
   }
};

// make delegate to the `Task`

var XYZ = Object.create( Task );

XYZ.prepareTask = function ( ID , Label) {
    this.setId( Id );
    this.label = Label;
    
};
XYZ.outputTaskDetails = function ( ) {

    this.outputID();
    console.log( this.label  );
}

*/
//Debug
/*
function Foo() {}

var a1 = new Foo();

a1; // Foo {}

a1.constructor; //Foo(){}
a1.constructor.name ; //Foo*/

//OL-OO
/*

var Foo ={};
var a1 = Object.create( Foo );
console.log( a1 );
Object.defineProperty( Foo, "constructor", {
    enumerable: false,
    value: function Gotcha(){}
});

console.log(  a1 ); // Gotcha {}

*/
//Mental Model Compared OOP
/*
function  Foo ( Who ) {
    this.me = Who;
    
}
Foo.prototype.identify = function () {

    return ' I am ' + this.me;
};

function  Bar( who ) {
    Foo.call( this , who);
};
Bar.prototype =     Object.create( Foo.prototype );

Bar.prototype.speak = function() {
    alert( "Hello, " + this.identify() + "." );
};

var b1 = new Bar( 'b1' );
var b2 = new Bar( 'b2' );
b1.speak();
b2.speak();
*/
//Mental Model Compared OL-OO
var Foo = {
    init: function(who) {
        this.me = who;
    },
    identify: function() {
        return "I am " + this.me;
    }
};

var Bar = Object.create( Foo );

Bar.speak = function() {
    alert( "Hello, " + this.identify() + "." );
};

var b1 = Object.create( Bar );
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );

b1.speak();
b2.speak();

