
carouser

function makeAdder( x ) {
    function add( y ) {
        return x +y ;
    }
    return add;
}

var plusOne  = makeAdder(1);

plusOne( 5 );
plusOne( 6 );
var  plusTen = makeAdder( 10 );

plusTen( 12);
plusTen( 13);
