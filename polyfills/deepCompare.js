// deeply compare if two objects are equal or not

let obj1 = {
  e: 4,
  a: 1,
  b: {
    c: 2,
    d: 3,
    f: {
      g: {
        h: [1, 2, 3, 4, 5],
      },
    },
  },
};

let obj2 = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    f: {
      g: {
        h: [1, 2, 3, 4, 5],
      },
    },
  },
  e: 4,
};

function deepCompare(obj1, obj2) {
  if (Object.keys(obj1).length != Object.keys(obj2).length) return false;

  for (keys in obj1) {
    if (obj2[keys] && typeof obj1[keys] == typeof obj2[keys]) {
      if (typeof obj1[keys] == "object") {
        return deepCompare(obj1[keys], obj2[keys]);
      } else if (obj1[keys] != obj2[keys]) return false;
    } else return false;
  }

  return true;
}

console.log(deepCompare(obj1, obj2));
