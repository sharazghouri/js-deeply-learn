var p1 = Promise.resolve(42);
var p2 = new Promise(function pr(resolve) {
  setTimeout(function () {
    resolve(43);
  }, 100);
});
var v3 = 44;
var p3 = new Promise(function pr(resolve, reject) {
  setTimeout(function () {
    reject("Oops");
  }, 10);
});

//Promise.all([p1, p2, v3]).then(function fullfilled(val) { console.log(val); });

Promise.all([p1, p2, p3, v3]).then(function fullfilled(vals) {
  console.log(vals);
  //never get here.
}, function reject(reason) {
  console.log(reason);
});

