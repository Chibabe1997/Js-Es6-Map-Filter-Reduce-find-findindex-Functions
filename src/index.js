var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//or
// var newNumbers =[];
// numbers.forEach(x){
//   newNumbers.push(x * 2)
// }

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);
// or forEach

// var newNumbers=[];
// numbers.forEach(function(num){
//   if (num < 10){
//     newNumbers.push(num)
//   }

// })

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumbers = numbers.reduce(function (Accumulator, currentNumber) {
//   console.log("accumulator = " + Accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return Accumulator + currentNumber;
// });

// console.log(newNumbers);

//or using forEach
// var newNumbers = 0;
// numbers.forEach(function (currentNumber) {
//   newNumbers += currentNumber;
// });

// console.log(newNumbers);
//Find - find the first item that matches from an array.

// const newNumbers = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

// const newNumbers = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);
