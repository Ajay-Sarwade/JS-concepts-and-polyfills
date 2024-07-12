let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: {
      f: "hello ",
      g: "world",
    },
    h: [1, 2, 3, 4, 5],
  },
};

function deepClone(obj1) {
  let x = Array.isArray(obj1) ? [] : {};

  for (keys in obj1) {
    if (typeof obj1[keys] == "object") {
      x[keys] = deepClone(obj1[keys]);
    } else {
      x[keys] = obj1[keys];
    }
  }

  return x;
}

let obj2 = deepClone(obj);

obj2.a = 100;
console.log(obj);
console.log(obj2);
