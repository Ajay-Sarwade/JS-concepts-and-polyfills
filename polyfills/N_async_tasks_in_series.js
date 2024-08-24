function p1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("p1");
      res("p1");
    }, 3000);
  });
}
function p2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("p2");
      res("p2");
    }, 2000);
  });
}
function p3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("p3");
      res("p3");
    }, 3000);
  });
}

async function runp(arr) {
  for (p of arr) {
    await p();
  }
}

runp([p1, p2, p3]);
