// function add(a,b) {
//     return a+b;
// }
// function sub(a,b) {
//     return a-b;
// }
// //till now it is private

// module.exports = {
//     add,
//     sub
// }
// it overwrites so export everthing at once
// here we make add function public
//basically we're exporting it


// _____________________________________

exports.add1 = (a,b) => a + b
exports.sub2 = (a,b) => a - b
//as many times as you can declare exports
//add1 and sub2 is property