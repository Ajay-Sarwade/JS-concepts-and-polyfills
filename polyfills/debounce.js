function print() {
  console.log("im printing");
}

function debounce(cb, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}

let debounceFun = debounce(print, 5000);
