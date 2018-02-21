var s = new String( "Hellom, Sharaz!" );

console.log( s.toString() );

console.log( typeof  s ); // Object not String

console.log(  s instanceof  String);// true
//Internal [[Class]]
Object.prototype.toString.call( s ); // "[object String]"


//Boxing Wrappers
/*

var a = "sharaz";
console.log( a.length ); // 3
console.log( a.toUpperCase() ) // "ABC")*/

//Object Wrapper Gotchas
var a = new Boolean( false );

if (!a) {
    console.log( "Oops" ); // never runs
}

