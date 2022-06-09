
// Псевдомассив arguments



// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120



// // Используя операцию ... (rest)


// function fn(...args) {
//   // В переменной args будет полноценный массив
//   const args = Array.from(arguments);
// }




// найти самое маленькое число в массиве

// const findSmallesNumber = function (numbers) {
//     let smallestNamber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallestNamber) {
//             smallestNamber = number;
//         }
//     }
//     return smallestNamber;
// }
// console.log(findSmallesNumber([3, 8, 12, -2, 15]));


// замена в строке символов на противоположний (апперкейс или ловеркейс)

// const changeCase = function(string) {

// const letters = string.split('');
//    let invertedString = "";
    
// for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
// }
//     return invertedString;

    
// }
// console.log(changeCase("my NAME IS"));




// Преобразовать строку із букв и пробелов в URL-slug (нижний регистр и через тире)

// const slugify = function (string) {
//     return string.toLowerCase().split(" ").join("-");
// }
// console.log(slugify("Top 10 benefits of React framework"));



// Псевдомассив можно перебирать в цикле


// const fn = function () {
//     console.log(arguments);
    
//     const args = Array.from(arguments);
//     console.log(args);
// }
// fn(1, 2, 3);
// fn(1, 3, 8, 0, 7, 3);

// первий консоль - псевдоьасив  console.log(arguments);

// далее переделано в массив при помощи Array.from(arguments) - устарелий способ


// Второй способ преобразования ...rest

// const fn = function (... args) {
//     console.log(arguments);
    
// }
// fn(1, 2, 3);
// fn(1, 3, 8, 0, 7, 3);



// перетворення в масив всього крім а, в, с - можна тільки перед массивом

// const fn = function (a, b, c, ... args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// }
// fn("helo", 1, 2, 3);
// fn(1, 3, 8, 0, 7, 3);


// додавання масивів

// const add = function (... args) {
//     console.log(args);
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 3, 8, 0, 7, 3));




// знайти спільні аргументи серед чисел та масиву

// const filterNumbers = function (array, ... args) {
//     console.log("array;", array);
//      console.log("args", args);
//     const uniqueElements = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElements.push(element);
//         }
//     }
//     return uniqueElements;
// }
// console.log(filterNumbers([7, 9, 7], 1, 2, 3));
// console.log(filterNumbers([1, 3, 8,], 0, 7, 3));