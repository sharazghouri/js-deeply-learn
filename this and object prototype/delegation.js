/**
 * Created by welcom on 2/2/2018.
 */


function Foo( eho ){

     this.me = who;
}
Foo.prototype.identiify  = function () {
    return " i am  "+ this.me;
};
function Bar( who ) {

    Foo.call( this, who)
}
Bar.prototype.speak = function () {

    alert( 'Hello' + this.identiify()+ '.');
};
var b1 = new Bar( 'b1');
var b2 = new Bar( 'b2');
b1.speak();
b1.speak();g
