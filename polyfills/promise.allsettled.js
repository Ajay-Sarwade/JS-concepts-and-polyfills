function a() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("a");
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
      res("c");
    }, 0);
  });
}

Promise.allset = (promise) => {
  return new Promise((resolve, reject) => {
    let result = [],
      count = 0;
    for (let i = 0; i < promise.length; i++) {
      Promise.resolve(promise[i])
        .then((res) => {
          count++;
          result.push({ status: "fulfilled", data: res });
          if (count == promise.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          count++;

          result.push({ status: "rejected", data: err });
          if (count == promise.length) {
            resolve(result);
          }
        });
    }
  });
};

Promise.allset([a(), b(), c()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
