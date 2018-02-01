/**
 * Created by welcom on 1/13/2018.
 */
/*
function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
}

var you = {
    name: "Kyle"
};

var me ={

    name: "sharaz"
}




identify.call( you ); // READER
identify.call( me ); //Sharaz

speak.call( you ); // Hello, I'm READER
speak.call( me ); // sharaz */


/*

//function object reference use to access propery of outside the world { if we use this then count only accessable inside the functuion}
function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    foo.count++;
    //this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
//console.log( foo.count );  // 0 if we use this then this is accessible only inside the function
console.log( foo.count ); // 4
*/

/*
//Yet another way of approaching the issue is to force this to actually point at the foo function object:
function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    // Note: `this` IS actually `foo` now, based on
    // how `foo` is called (see below)
    this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        // using `call(..)`, we ensure the `this`
        // points at the function object (`foo`) itself
        foo.call( foo, i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 4*/
