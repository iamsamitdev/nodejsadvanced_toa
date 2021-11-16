// ปกติ Node.js จะมี module wrapper อยู่ในตัวมันดังนี้
(function (exports, require, module, __filename, __dirname){
    // Some code here ...
});
// Import form utils.js
// const utils = require('./utils'); // ปกติ
const { sayHello, calculateVat } = require('./utils'); // Destructuring

// utils.sayHello();
// const vat = utils.calculateVat(100,7);
// console.log(vat);

// Destructuring
// sayHello();
// const vat = calculateVat(100,7);
// console.log(vat);

console.log(exports);
console.log(require);
console.log(module);
console.log(__filename);
console.log(__dirname);