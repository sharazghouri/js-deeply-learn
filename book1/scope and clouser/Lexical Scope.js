

function foo(str) {
    "use strict";
    eval( str );
    console.log( a ); // ReferenceError: a is not defined
}

foo( "var a = 2" );



//eval use to execute to execute dynamically generate code
var code= ' var z= 10;' +
    'console.log( z )';
eval( code );  // 10

//setTimeout( 'return 10;' , 10 );
//setTimeout( 'return 10;' , 10 );

//new Function safer than eval()
var EFunction = new Function( 'salary', 'bonus', 'return salary * bonus;');
EFunction( 34 ,43);
//witj use to accept the object property with out using obj kwy word but this bad because leadked th scope
function foo(obj) {function foo(obj) {
    with (obj) {
        a = 2;
    }
}

    var o1 = {
        a: 3
    };

    var o2 = {
        b: 3
    };

    foo( o1 );
    console.log( o1.a ); // 2

    foo( o2 );
    console.log( o2.a ); // undefined
    console.log( a ); // 2 -- Oops, leaked global!
    with (obj) {
        a = 2;
    }
}

var o1 = {
    a: 3
};

var o2 = {
    b: 3
};

foo( o1 );
console.log( o1.a ); // 2

foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2 -- Oops, leaked global!