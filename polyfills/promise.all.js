function a() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("a");
    }, 2000);
  });
}
function b() {
  return new Promise((res, rej) => {
    rej("b");
  });
}
function c() {
  return new Promise((res, rej) => {
    res("c");
  });
}

Promise.myall = (promise) => {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    for (let i = 0; i < promise.length; i++) {
      Promise.resolve(promise[i])
        .then((res) => {
          result[i] = res;
          count++;
          if (count == promise.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

Promise.myall([a(), b(), c()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
