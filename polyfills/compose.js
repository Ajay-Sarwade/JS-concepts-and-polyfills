function compose(...fn) {
  return function (arg) {
    let res = [...fn].reduceRight((acc, fn) => {
      acc = fn(acc);
      return acc;
    }, arg);
    return res;
  };
}

function add(num) {
  return num + 10;
}

function sub(num) {
  return num - 2;
}

function mul(num) {
  return num * 2;
}

let comp = compose(add, sub, mul);
let res = comp(1);
console.log(res); // 10

// Pipe is same as compose but it evaluates from left to right
