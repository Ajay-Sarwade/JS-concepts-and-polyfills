function a() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("a");
    }, 1000);
  });
}
function b() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("b");
    }, 200);
  });
}
function c() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("c");
    }, 0);
  });
}

Promise.myany = (promise) => {
  return new Promise((resolve, reject) => {
    let count = 0;
    for (let i = 0; i < promise.length; i++) {
      Promise.resolve(promise[i])
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          count++;
          if (count == promise.length) {
            reject("all promise failed");
          }
        });
    }
  });
};

Promise.myany([a(), b(), c()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
