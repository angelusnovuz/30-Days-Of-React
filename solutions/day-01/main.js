//First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.split(" ");

console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');

//remove 'Honey' if you are allergic to honey
shoppingCart.shift();

//modify Tea to 'Green Tea'
shoppingCart[2] = "Green Tea";


console.log(shoppingCart)
