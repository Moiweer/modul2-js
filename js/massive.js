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