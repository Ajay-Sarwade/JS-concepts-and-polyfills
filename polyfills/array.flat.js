let arr = [1, 2, 3, [4, 5], [[6]]];

Array.prototype.myflat = function (depth = 0) {
  let res = [];
  this.forEach((ele) => {
    if (Array.isArray(ele) && depth > 0) {
      res.push(...ele.myflat(depth - 1));
    } else {
      res.push(ele);
    }
  });
  return res;
};

console.log(arr.myflat(2));
