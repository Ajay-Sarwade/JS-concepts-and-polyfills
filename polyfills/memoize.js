function memoize(fn) {
  let obj = {};
  return function (...args) {
    if (!obj[args]) {
      obj[args] = fn.call(this, ...args);
      return obj[args];
    } else {
      return "already called " + obj[args];
    }
  };
}

function addnums(x, y, z) {
  return x + y + z;
}

function mulnums(x, y) {
  return x * y;
}

let add = memoize(addnums);
let mul = memoize(mulnums);

console.log(add(1, 2, 3));
console.log(add(1, 2, 3));
console.log(mul(18, 35));
console.log(mul(18, 35));
