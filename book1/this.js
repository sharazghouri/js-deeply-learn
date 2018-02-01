/**
 * Created by welcom on 1/3/2018.
 */


var  bar = 'hello';

function foo() {
    console.log( this.bar);
}

foo();//"hello"
/*
foo() ends up setting this to the global object in non-strict
mode—in strict mode, this would be undefined and you’d get
an error in accessing the bar property—so "global" is the value
found for this.bar.
*/


//this set to obj1 this object reference
var obj1 = {
    bar: "obj1",
    foo: foo
};
obj1.foo(); // obj1


var obj2 = {
    bar: "obj2"
};

foo.call( obj2 ); // this set to obj2 //result object2

new foo();  // undefined

