//Arrai,of satatic function
// var a = Array(3);
// console.log(a.length);
// console.log(a[0]);

// var b = Array.of(3);
// console.log(b.length);
// console.log(b[c]);

// var c = Array.of(1, 2, 3);
// console.log(c.length);
// console.log(c);

class MyArary extends Array{
  sum(){
    return this.reduce(function reducer( acc , curr ){

      return  acc+curr;
    } , 0);

  };
}

// var x = new MyArary( 3 );
//x.length;
//x.size;

// var y=  [3];
// console.log( y );
//y.sum(); // sum is not function 


// var  z = MyArary.of(3);//
//  z.length; //1
//console.log( z.sum() );   //3


