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

for (let a = 1; a <= 100; a++) {
    if (a%3 == 0) && (a%5 ==0) {
        console.log(a);
        console.log( "IS A FIZZBUZZ");
        
}
        else if (a%3 == 0)    {
            console.log(a);
        console.log("Is a FIZZY BUGGER");
}   
        else if (a%5 == 0)  {
            console.log(a);
            console.log("Is a BUZZY BARSTEWARD");
}
            else {
                console.log(a)
            } 

    }