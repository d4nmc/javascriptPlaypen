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

// let totalMoney = 10000;
// let moneyPaidSoFar = 9650;
// let totalLeftToPay = totalMoney - moneyPaidSoFar;

// console.log(`You owe me £${totalMoney}, you have £${totalLeftToPay} left to pay you God Damn Loch Ness Monster!`);

// ITERATION
// (loops)

// FOR
// use a counter
// run until a condition is met

// for(let i = 0; i < 10; i++) {
//     console.log(`i = ${i}`);
// //  console.log(`i = ` + i);
// }

// // WHILE
// // works with booleans (TRUE or FALSE)
// // run while the condition is true

// let condition = true;
// let increment = 0;

// while(condition) {

//     console.log(`increment me`);
//     increment++;

//     if (increment == 3) {
//         condition = false;
//     }

// }

// // DO-WHILE
// // like a while loop
// // but always runs at least once
// let a = false;

// do {
//     console.log(`run forest run`);
// } while(a);

// // SWITCH CASES

// // run until a BREAK or RETURN
// // can be more effective than large if-else statements

// let num = 1;

// switch(num) {
//     case 0:
//         console.log(`zero is zero`);
//         break;
//     case 1:
//         console.log(`we're at one`);
//     case 4:
//         console.log(`now it's four`);
//     case 10:
//         console.log(`we've made it to ten!`)
//         break;
//     default:
//         console.log(`not sure what you are doing here`)
// }

// ITERATION

// EXERCISE 1 
// CHANGED <= to != so it only counts to 200 rather than 201 like in the example
// create this same thing with a for loop
// come back and try to add a conition that when the count is met it displays a final message "you have reached the end of the count"

// let a = 100;
// while (a != 200) {
//   a++;
//   console.log(`a = ${a}`);
// }

// for (let a = 100; a <= 200; a++) {
//     if (a != 200) {    
//     console.log(`A is = to the number ${a} so keep counting!`);
//     }else {
//         console.log('You have reached the last number');
//   }
// }

// EXERCISE 2
// try to solve it with a for loop

// let a = 100;
// while (a <= 200) {
//   if (a % 2 == 0) {
//     console.log("-");
//   } else {
//     console.log("*");
//   }
//   a++;
// }

// for (let a = 100; a <= 200; a++) {
//     if (a%2 == 0) {
//         console.log("-");
//     }else {
//             console.log("*");
//         }
//     }
    
// EXERCISE 3
// 

// for (let a = 0; a < 10; a++) {
//     for (let b = 1; b <= 10; b++) {
//       console.log(b);
//     }
//  }  

// EXERCISE 4
// Do for loops for all existing loop examples

// EXERCISE 5
// Write a switch case statement which uses the current day as its        expression and matches with the relevant case. Criteria:

//     Omit a break statement if it is a weekday, until the last day
//     Use a default case to handle an invalid range.

// let now = new Date(); 
// let day = now.getDay();
// switch (day) {
//   case 0:
//     console.log(`It's Sunday`);
//     break;
//   case 6:
//     console.log(`It's Saturday`);
//     break;
//   case 1:
//     console.log(`It's Monday`);
//     console.log('Nobody likes today')
//     break;
//   case 2:  
//   console.log(`It's Tuesday`);
//   console.log('Almost as bad as a Monday')
//     break;
//   case 3:
//     console.log(`It's Wednesday`);
//     console.log('Happy Hump Day')
//     break;
//   case 4:
//     console.log(`It's Thursday`);
//     console.log('Weekend loading...')
//     break;
//   case 5:
//     console.log(`It's Friday`);
//     console.log('Gooo Mufassa!!!')
//     break;
//   default:
//     console.log(`That's not a day!`);
//     break;
// }

// let now = new Date(); 
// let day = now.getDay();
// switch (day) {
//   case 0:
//     console.log(`It's Sunday`);
//     break;
//   case 6:
//     console.log(`It's Saturday`);
//     break;
//   case 1:
//   case 2:  
//   case 3:
//   case 4:
//   case 5:
//     console.log(`Still a weekday homie so KEEP WORKING!`);
//     break;
//  }

// EXERCISE FIZZBUZZ

// Write a program which:
//                      prints no.s 1 to 100
//                      for each multiple of 3 it prints fizz
//                      for each multiple of 5 it prints buzz
// cant get (a) to show in any of FIZZ etc returns... $ use this?
// cant get the FIZZBUZZ function working, AND condition isnt right?

// for (let a = 1; a <= 100; a++) {
//     if ((a%3 == 0) && (a%5 ==0)) {
//         console.log();
//         console.log(a + " IS A FIZZBUZZ");
//         console.log();
        
// }
//     else if (a%3 == 0)    {
//         console.log();
//         console.log(a + " Is a FIZZY BOY");
//         console.log();
// }   
//     else if (a%5 == 0)  {
//         console.log();    
//         console.log(a + " Is a BUZZY BARSTEWARD");
//         console.log();
// }
//          else {
//                 console.log(a)
//             } 

//     }

// DAVROS SOLUTION
// let num = 1;
// for (let i=0; i<100;i++) {
//     if ((num%3 == 0) && (num%5 == 0)) {
//         console.log(`FizzBuzz`)
//     }
//     else if (num%5 == 0) {

//         console.log(`Buzz`);

//     }

//     else if (num%3 == 0) {

//         console.log(`Fizz`)
//     }

//     else {

//         console.log(num);
//     }
    
//     num++;
  
    
//     }

// DEMONSTRATION OF LOOPS
// set i to equal 2
// do something if i is equal to or less than 6

// print i + 1 = 3

// increment i by 2, so i = 4
// i IS <= 6 so

// print i + 1 = 5

// increments i by 2, so i= 6
// i IS <= 6 so

// print i + 1 = 7

// increment i by 2, so i = 8
// i > 6, so it will stop


// WHILE LOOP
// let i = 2;

// while (condition == true) {}
// while( i <= 6 ) {
//     console.log(i + 1);
//     i = i + 2;
// }

// FOR LOOP

// for(let i = 2; i <= 6; i = i + 2) {
//     console.log(i+1);
// }


// CONDITIONALS

// TRUTHY and FALSEY

// FALSEY

// false - false
// 0 - zero
// `` - an empty string
// undefined
// null - empty
// NaN - not a number

// everything else is TRUTHY

// IF (ELSE and ELSE IF)
// check a condition
// run a code block if it is met

// let a = 2;

// if (a == 0){
//     console.log(`sunshine`);
// } else if (a != 2) {
//     console.log(`moonlight`);
// } else {
//     console.log(`boogie`);
// }

// TERNARY IF statment
// shorthand version of and IF ELSE statement

// let x = 2;

// if (x == 2){
//     console.log(`x is 2`);
// } else {
//     console.log(`x is not 2`);
// }

// let y = 2;

// y==2 ? console.log(`y is 2`) : console.log(`y is not 2`);


// EQUALITY and TYPE

// type is mutable
// we can compare different data types with the same value

// 1 == `1` ? console.log(true) : console.log(false);

// JavaScript is mutating the TYPE so that ONE equals ONE
// it is only checking the VALUE

// STRICTLY EQUAL OPERATOR
// ===
// checks the TYPE and the VALUE

// 1 === `1` ? console.log(true) : console.log(false);

//  EXERCISE 3

// Create a IF statement that satifies the following:

//     Declare a variable age
//     Write a condition that checks if age is between 18 AND 65
//     Return a value in each case where the condition is satisfied and not satisfied.
//     Extra: Consider the case where age is less than 18 - return 'underage'

//      use FIZZBUZZ!!!!

// let age = 67;

// if ((age => 18) && (age <= 65)){
//     console.log("Your age of " + (age) + " is acceptable, you can have a mortgage!");
//     } else if (age <= 18) {
//         console.log("You are only " + (age) + " and need to save for longer");
//     } else {
//         console.log("To old I am afraid, we can not offer you a mortgage")
//     }

// EXERCISE 4

// Using ternary-if syntax, write code that checks if age is above 50.

// let age = 51;
// let result = 50 ? console.log(`Over 50`) :console.log(`Under 50`);

// let x = 2;

// if (x == 2){
//     console.log(`x is 2`);
// } else {
//     console.log(`x is not 2`);
// }

// let y = 2;

// y==2 ? console.log(`y is 2`) : console.log(`y is not 2`);

// EXERCISE FOR FUN - MAKE HOT DOG NOT DOG 



// OBJECTS, ARRAYS and JSON

// OBJECTS
// collection of data in any order
// made up of KEY : VALUE pairs

// lets create an object

// let animal = new Object();
// animal[`name`] = `Clifford`;
// animal[`type`] = `Dog`;
// animal[`size`] = `Big`;

// console.log(animal);
// console.log(animal.size);

// can also EXPAND objects with new properties
// whenever you like

// animal.colour = `Red`;
// console.log(animal.colour);

// LITERAL notation
// quicker and easier

// let vehicle = {
//     "type" : `bike`,
//     "seats": 1,
//     "wheels" : 2
// }

// console.log(vehicle);

// ARRAYS

// OBJECTS can be stored in an ARRAY
// arrays can also be created with a LITERAL notation

// let garage = [
//     vehicle,
//     {"type" : `car`, "seats" : 5, "wheels": 4}
// ]

// console.log(garage);

// let us LOOP through an ARRAY

// let x = [1,2,3,4,5];

// the standard loop

// for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
// }

// you can also us an ENHANCED for loop

// for (let placeholder of x) {
//     console.log(placeholder);
// }

// ARRAY OBJECT METHODS

// reverse
// console.log(x.reverse());

// join
// console.log(x.join(`|`));

// JSON
// JavaScript Object Notation
// you can use this in JavaScript with no issues

let newJSON = {
    "name" : "Cameron",
    "age" : 28
}

// to convert JSON to different DATA TYPES

// JSON to STRING
let str = JSON.stringify(newJSON);
console.log(str);

// STRING to JSON
let my = JSON.parse(str);
console.log(my);
console.log(my.name);