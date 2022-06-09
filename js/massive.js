// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// const lastIndex = friends.length - 1;

// console.log(lastIndex);




// посчітать общую сумму покупок в корзіне 

// const cart = [54, 28, 105, 60, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }


//  или
// const cart = [54, 28, 105, 60, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (const value of cart) {
//     total += value;
// }
// console.table("Total: ", total);



// Скрипт поиска логина: 3 способа

// const logins = ["moiweer", "room", "candycat", "potato"];
// const loginToFind = "moiweer";
// let message = "Пользователь ${loginToFind} не найден";

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log("Login: ", login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log("Ура, нашел!");
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }


// второй способ:
// const logins = ["moiweer", "room", "candycat", "potato"];
// const loginToFind = "moiweer";
// let message = `Пользователь ${loginToFind} не найден`;
// for (const login of logins) {
//     console.log("Login: ", login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//         console.log("Ура, нашел!");
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }
// console.log(message);





//  третий способ:

// const logins = ["moiweer", "room", "candycat", "potato"];
// const loginToFind = "moiweer";
// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;

// console.log(message);


// Скрипт нахождения самого маленького числа в массиве 
// при условии что числа не повторяются
// линейний код - если много, то выполнятся будет долго/

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNamber = numbers[0];


// for (const number of numbers) {
     
//     if (number < smallestNamber) {
//         smallestNamber = number;
//     }
// }
// console.log("bigestNamber: ", bigestNamber); 





// скріпт самого великого числа:

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let bigestNamber = numbers[0];


// for (const number of numbers) {
     
//     if (number > bigestNamber) {
//         bigestNamber = number;
//     }
// }
// console.log("bigestNamber: ", bigestNamber); 



// Методи массивов

// Методы split() 

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// Метод join(delimeter)

// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"

// Метод indexOf()
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// Метод includes()
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// Методы push() 

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]


// pop()
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []




// Метод slice()

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// console.log(clients.slice(2)); // ["Poly", "Kiwi"]


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// Метод splice()

// удаление  splice(position, num)
// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]


// добавление splice(position, 0, new_element_1, new_element_2, ...)


// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]


// замена splice(position, num, new_element_1, new_element_2, ...)

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]



// Метод concat()
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]





// 32  - найти входит ли в массив какое-то значение(value)

// function includes(array, value) {
//     //  const array = [];
//     for (let i = 0; i <= array.length; i += 1) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//            return false;
        
//     }

// то же самое, но с includes:



// function includes(array, value) {
//     const message = array.includes(value)
//     ? true : false
    
//            return message;
        
// }
// console.log(includes([1, 7, 9, 3], 10));


// Третий вариант:

// function foundIncludes(array, value) {
//     return array.includes(value)
//         ? true : false;      
        
// }
// console.log(foundIncludes([1, 7, 9, 3], 1));