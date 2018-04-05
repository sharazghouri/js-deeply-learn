//RUN TO COMPLESTION
/* 
var x = 1;
function foo(){
  x++;
  bar();
  console.log( 'x',x ); //3
}

function bar(){
  x++;
}

foo(); */
//GENERATOR EXAMPLE


var x = 1;
function*foo(){
  x++;
  yield;
  bar();
  console.log( 'x',x );
}

function bar(){
  x++;
}


// construct an iterator `it` to control the generator
var it = foo();

//Start foo here
it.next();
console.log(x); // 3
bar();
console.log( 'after bar run', x );
it.next();//4

