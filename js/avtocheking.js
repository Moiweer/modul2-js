// 1
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }


// 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//    return  "Welcome!";
  
//   } 
    
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// 3
// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }

// переделываем в вариант с ранним возвратом:


// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return "Your order is empty!";}
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
  
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));


// 4

// 5


// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// 6

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";


// 7

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length

// 8


// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];


// console.log(lastElementIndex);
// console.log(lastElement[lastElementIndex]);


// 9

function getExtremeElements(array) {
var array = [];
const firstElement = array[0];
const lastElement = array.langth -1;
return getExtremeElements[firstElement, lastElement];

 
}
console.log(getExtremeElements[firstElement, lastElement]);