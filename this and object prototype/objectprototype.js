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
console.log( myObject.a );

for (var k in myObject) {
    console.log("found: " + k);
}
// found: a

("a" in myObject); // true