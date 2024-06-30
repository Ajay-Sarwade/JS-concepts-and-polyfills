// map polyfill

let arr1 = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

let mapArr = arr.myMap((item) => {
  return item * 2;
});

console.log(mapArr);

// polyfill filter

let arr2 = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

let filterArr = arr2.myFilter((item) => {
  return item > 2 && item < 5;
});

console.log(filterArr);

// polyfill reduce

let arr3 = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};

let reduceVal = arr3.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(reduceVal);
