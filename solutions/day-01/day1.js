//Declare an empty array;
const emptyArray = [];

//Declare an array with more than 5 number of elements
const arrayFiveElements = [1, 2, 3, 4, 5];

//Find the length of your array
console.log(arrayFiveElements.length);

//Get the first item, the middle item and the last item of the array
const elementOne = arrayFiveElements.shift();
const elementMiddle = arrayFiveElements[2];
const elementUltumate = arrayFiveElements.pop();

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [true, 5, "string", 5, false, "letras"];
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[3]);

//Print out each company
itCompanies.forEach(companie => {
  console.log(companie);
});

//Change each company name to uppercase one by one and print them out
itCompanies.forEach(companie => {
  console.log(companie.toUpperCase);
});


//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const initialValue = "";
const sumWithInitial = itCompanies.reduce(
  (previousValue, currentValue) => previousValue + " " +currentValue,
  initialValue
);

console.log(`${sumWithInitial} are big IT companies.`);
// expected output: 10


//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companie = "";
console.log(itCompanies.some(companie));


//Filter out companies which have more than one 'o' without the filter method
const companiesWihtO = itCompanies.filter((companie) => companie.includes('o'));
console.log(countriesWithLand)

//Sort the array using sort() method
console.log(itCompanies.sort());

//Reverse the array using reverse() method
console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0 , 3));

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3, ));


//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3));

//Remove the first IT company from the array
itCompanies.shift();

//Remove the middle IT company or companies from the array
itCompanies.remove(3);

//Remove the last IT company from the array
itCompanies.pop()

//Remove all IT companies
itCompanies.splice()



