/*
function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz(); // <-- call-site for `baz`

*/


//Default Binding
/*
function foo() {
    console.log( this.a );
}

var a = 2;

foo(); // 2*/


//Implict function binding

/*
function foo() {
    console.log( this.a );
}
var obj = {
    a: 42,
    foo: foo
};
obj.foo();*/
/*
function foo() {
    console.log( this.a );
}

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a: 2,
    obj2: obj2
};


obj1.obj2.foo(); // 42

*/

//Implicily lost
/*
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

//bar already have own erfernce of foo
 var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global*/

/*
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // `a` also property on global object

setTimeout( obj.foo, 100 ); // "oops, global"*/


//Explictly Biniding
/*

function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

foo.call( obj ); // 2*/

/*

function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};
var bar =function () {

    return foo.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5*/


//new Binding

function  foo( a ) {

    this.a= a
}

// when fuuntion invoked with new
/*a brand new object is created (aka, constructed) out of thin air
the newly constructed object is [[Prototype]]-linked
the newly constructed object is set as the this binding for that function call
unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object*/
/*
var bar = new foo( 43 );
console.log( bar.a);  // foo
*/


//precedence
/*

function something( some ){
    this.a = some;
}
var obj1= {
    foo : foo
};

var obj2 ={};

obj1.foo( 2 ); //auto
console.log( obj1.a ); //2

obj1.foo.call( obj2 , 3);
console.log( obj2.a ); //3

var bar = new obj1.foo( 4 );
console.log( obj1.a );//2
console.log( bar.a );//4*/



function foo(something) {
    this.a = something;
}

var obj1 = {};
var bar= foo.bind( obj1 );
bar( 2 );

console.log( obj1.a );//2
var baz = new bar( 3 ); //newly created obj assign to baz
console.log( obj1.a );//2
console.log( baz.a );//3

