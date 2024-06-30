const pending = 0;
const fulfilled = 1;
const rejected = 2;

function myPromise(executer) {
  let state = pending;
  let value = null;
  let handlers = [];
  let catches = [];

  function resolve(val) {
    if (state !== pending) return;
    state = fulfilled;
    value = val;
    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== pending) return;
    state = rejected;
    value = err;
    catches.forEach((h) => h(err));
  }

  this.then = function (callback) {
    return new myPromise((resolve, reject) => {
      function handle(value) {
        let result = callback(value);
        if (result && typeof result.then == "function") {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      }

      if (state === fulfilled) {
        handle(value);
      } else {
        handlers.push(handle);
      }
    });
  };

  executer(resolve, reject);
}

let p = new myPromise((res, rej) => {
  setTimeout(() => {
    res("hello world");
  }, 2000);
});

let p1 = new myPromise((res, rej) => {
  setTimeout(() => {
    res("hello world");
  }, 5000);
});

p.then((res) => {
  console.log(res);
  return "ajay";
})
  .then((res) => {
    console.log("hello ", res);
    return p1;
  })
  .then((res) => {
    console.log("hello ", res);
    return "abhay";
  })
  .then((res) => {
    console.log("hello ", res);
  });
