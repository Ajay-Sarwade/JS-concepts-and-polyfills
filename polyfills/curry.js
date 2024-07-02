function curry(fn) {
  return function curried(...args) {
    if (fn.length != args.length) {
      return curried.bind(this, ...args);
    } else return fn(...args);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2)(3));
