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

// function getExtremeElements(array) {
 

//     return [array[0], array[array.length - 1]];

//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// 10

// function splitMessage(message, delimeter) {
// let words;
//     words = message.split(delimeter);
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train"));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));


// // 11
// function calculateEngravingPrice(message, pricePerWord) {
//     let array = message.split(" ");
//     return array.length * pricePerWord;
    
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// // 12

// function makeStringFromArray(array, delimeter) {
//   let string;
//    string = array.join(delimeter);
//   return string;


// }
// function slugify(title) {
//   // Change code below this line
//     const slug = title.toLowerCase().split(" ").join("-");


//     return slug;
 
// }
// console.log(slugify("Arrays for begginers"));

// 14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// 16

// function makeArray(firstArray, secondArray, maxLength) {
//     let newArray = [];
//     newArray = firstArray.concat(secondArray);
//     if(newArray.length >= maxLength) {
//         return newArray.slice(0, maxLength);
//         return newArray;
//     }

// }
//  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));




// 17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { 

//   console.log(i);
// }


18//


// function calculateTotal(number) {
   
  
//     let sum = 0;
    
//     for (let i = 0; i <= number; i += 1) {
//         sum += i;


//     }
    
//        return sum;  
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));



// 19

// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// 20
// function calculateTotalPrice(order) {
  
//     let total = 0;
  
    
// for (const orders of order) {
//         total += orders;


//     }
       
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));



// (let i = 0; i <= order.length; i += 1)

// 21



// function findLongestWord(string) {
  
//     const array = string.split(" ");
//     let longestword = array[0];

//     for (let i = 0; i < array.length; i += 1) {
//         if (longestword.length < array[i].length) {
//             longestword = array[i];
//         } 
//     }
//     return longestword;
    
//     } 

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord());



// 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//     for (let i = min; i <= max;  i +=1){
//         numbers.push(i);
//     }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

// 

function filterArray(numbers, value) {
    const numbers = [];
    
    for (let i = numbers[0]; i <= value;  i +=1){
        numbers.push(i);
    }
  return numbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
