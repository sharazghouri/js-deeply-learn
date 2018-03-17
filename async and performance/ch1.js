function foo() {
    console.log( b );
    return 1;
}

var a, b, c;

// ES5.1 getter literal syntax
c = {
    get bar() {
        console.log( a );
        return 1;
    }
};

a = 10;
b = 30;

a += foo();				// 30
b += c.bar;				// 11

console.log( a + b );	// 42/**
