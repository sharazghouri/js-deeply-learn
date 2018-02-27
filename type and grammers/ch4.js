
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
var a = {
    val: [1,2,3],

    // probably correct!
    toJSON: function(){
        return this.val.slice( 1 );
    }
};
var b = {
    val: [1,2,3],

    // probably inorrect!
    toJSON: function(){
        return "["+ this.val.slice( 1 ).join() +"]";
    }
};
//correct
console.log( JSON.stringify( a ));//[2,3]
//incorrect
 console.log( JSON.stringify( b ));//"[2,3]"








