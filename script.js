'use strict'

// console.log("Definitely NOT A Scam Page");

// let str1 = "Welcome to Freebies for Idiots";

// console.log("First Name");

// console.info("Second Name");

// console.warn("Born in?");

// console.error("Shoe Size");

// console.log("This is now the end of the exercises.", "color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");

// VARIABLES and DATA TYPES

// data types in JavaScript:
// are dynamic
// are mutable
// are decided at runtime
// are stored as text in memory until needed

// to declare variables
// 'let' is the standard variable
// let a = 2;
// // 'const' is a constant
// const b = 1;
// // 'var' is the depreciated way of declaring a variable
// var message = `hello`;

// we use camelCase for naming
// _ and $ leading the name

// in JavaScript there are two 'types' of TYPES

// Primatives 

// boolean, number, string, bigint, symbol, null, undefined
// let aBoolean = true;
// let aNumber = 3.2;
// let aString = `text`;
// let aBigInt = 9999999999999999n; // numeric literal <- helps with big numbers
// let aBrokenBigInt = 9999999999999999;
// let aSymbol = Symbol(`description in here`); // SYMBOLS are unique
// let aNull = null;
// let anUndefined;

// console.log(aBigInt);
// console.log(aBrokenBigInt);

// null is EMPTY
// undefined has not been initialised (no real value)

// console.log(anUndefined);
// console.log(typeof(anUndefined));

// console.log(aNull);
// console.log(typeof(aNull));

// Objects

// collection of properties
// mutable
// key : value pairs

// let myObject = {
//     key : `value`,
//     anotherKey : 12345
// }

// console.log(myObject);

// STRINGS 
// can be mutated in two main ways

// STRING CONCATENATION
// joining strings end to end
// `a` + `b` = `ab`
// quite memory intensive -> you have to store multiple strings at once.
// let string1 = `41 * 12 = `
// let result = 41 * 12;
// console.log(string1 + result);

// STRING INTERPOLATION
// uses one string
// uses string literals which contain placeholders
// these a called `template literals`
// let string2 = `41 * 12 = ${41 * 12}`;
// console.log(string2);

let totalMoney = 10000;
let moneyPaidSoFar = 9650;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`You owe me £${totalMoney}, you have £${totalLeftToPay} left to pay you God Damn Loch Ness Monster!`);