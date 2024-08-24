function p() {
  return new Promise((res, rej) => {
    let x = Math.random();
    setTimeout(() => {
      if (x > 0.5) {
        res("Success!");
      } else {
        rej("Failed...");
      }
    }, 1000);
  });
}

function retryPromise(promise, retries) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      promise()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          if (n == 0) {
            reject(err);
          } else {
            setTimeout(() => {
              console.log("attempts left ", n - 1);
              attempt(n - 1);
            }, 1000);
          }
        });
    }
    attempt(retries);
  });
}

retryPromise(p, 5)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("all attempts exhausted");
  });
