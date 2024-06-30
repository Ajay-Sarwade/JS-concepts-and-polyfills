function a() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("a");
    }, 3000);
  });
}
function b() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("b");
    }, 2000);
  });
}
function c() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("c");
    }, 1000);
  });
}

Promise.myrace = (promise) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promise.length; i++) {
      Promise.resolve(promise[i])
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

Promise.myrace([a(), b(), c()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
