// Export แบบที่ 1
// exports.calculateVat =  function calculateVat(money, vat){
//     return money * vat / 100;
// }

// exports.sayHello = function sayHello(){
//     console.log("Hello");
// }

// Export แบบที่ 2
function calculateVat(money, vat){
    return money * vat / 100;
}

function sayHello(){
    console.log("Hello");
}

module.exports = {
    calculateVat,
    sayHello
}