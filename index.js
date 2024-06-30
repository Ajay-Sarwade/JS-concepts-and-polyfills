// const cart = ["shirt", "pant", "mobile"];

// const validateOrder = (cart) => {
//   return cart.length > 0;
// };

// const createOrder = (cart) => {
//   return new Promise((resolve, reject) => {
//     if (!validateOrder(cart)) {
//       reject("Cart is empty");
//     }
//     setTimeout(() => {
//       resolve("12345");
//     }, 200);
//   });
// };

// const payment = (orderId) => {
//   return new Promise((resolve, reject) => {
//     if (!orderId) {
//       reject("Payment unsuccessfull");
//     }
//     setTimeout(() => {
//       resolve("Payment successfull");
//     }, 300);
//   });
// };

// createOrder(cart)  
//   .then((orderId) => {
//     console.log("Got order id", orderId);
//     return payment(orderId);
//   })
//   .then((paymentStatus) => {
//     console.log(paymentStatus);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise P1");
//   }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise P2");
//   }, 5000);
// });

// const handlePromise = async () => {
//   let data = await p1;
//   console.log(data);
//   let data2 = await p2;
//   console.log(data2);
// };

// // setTimeout(() => {
// handlePromise();
// // }, 10000);

// function p1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise P1");
//     }, 5000);
//   });
// }

// function p2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise P2");
//     }, 5000);
//   });
// }

// async function handlePromise() {
//   let data = await p1();
//   console.log(data);
//   let data2 = await p2();
//   console.log(data2);
// }

// setTimeout(() => {
//   handlePromise();
// }, 10000);

// Polyfill for bind
// let student1 = {
//   studentName: "Ajay",
//   age: 23,
// };

// let student2 = {
//   studentName: "Abhay",
//   age: 23,
// };

// function printName(city, state, country, asia) {
//   console.log("name is ", this.studentName, city, state, country, asia);
// }

// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   let restParams = args.slice(1);
//   return function (...returnArgs) {
//     let params = [...restParams, ...returnArgs];
//     obj.apply(args[0], params);
//   };
// };

// let PrintNameUsingBind = printName.bind(student1, "hubli", "karnataka");
// PrintNameUsingBind();

// let printNameUsingBindPolyfill = printName.mybind(
//   student2,
//   "hubli",
//   "karnataka"
// );
// printNameUsingBindPolyfill("india", "asia");

// currying

// by bind method
// function multiply(x, y) {
//   console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2, 7);
// multiplyByTwo(3);

// NOrmal method
// function multiply(x) {
//   return function (y) {
//     return function (z) {
//       console.log(x * y * z);
//     };
//   };
// }

// multiply(2)(3)(4);

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// let total = sum(1)(2)(3)(4)(5)();
// console.log(total);

// Throttle implememtaion

// let clickFun = (name, name2) => {
//   console.log("Clicked by ", name, "and ", name2);
// };

// let normalClickFun = () => {
//   console.log("Normally clicked");
// };

// let throttle = (fn, delay) => {
//   let flag = true;
//   return function (...args) {
//     if (flag) {
//       fn.apply(this, ...args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, delay);
//     }
//   };
// };

// let handleThrottle = throttle(function () {
//   clickFun("Ajay", "abhay");
// }, 2000);

// document.addEventListener("click", handleThrottle);
// document.addEventListener("click", normalClickFun);

// Debounce implementaion

// const apiCall = () => {
//   console.log("Api called ");
// };

// let debounce = (fn, delay) => {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };

// makeApiCall = debounce(apiCall, 500);
