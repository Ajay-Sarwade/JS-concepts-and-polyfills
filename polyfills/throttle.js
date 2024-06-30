function print() {
  console.log("im printing");
}

function throttle(cb, delay) {
  let flag = true;

  return function () {
    if (flag) {
      flag = false;
      setTimeout(() => {
        flag = true;
        cb();
      }, delay);
    }
  };
}

let throttledFun = throttle(print, 2000);
