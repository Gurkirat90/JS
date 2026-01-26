//This is official documentation of js where basics of js are documented in wrriten form.
//This file contains all the necessary information for beginners to understand the fundamentals of JavaScript.
//BY:- GURKIRAT90

//Dated :- 16-01-2025

// 1.Firstly let's understand what JavaScript is.
// JavaScript is a high-level, interpreted programming language that is primarily used to create interactive effects within web browsers. It is a versatile language that can be used for both client-side and server-side development.
//so we start with :-
//"PRINTING IN JAVASCRIPT"
console.log("Hello, World!");
//This line of code prints "Hello, World!" to the console.
process .stdout.write("Hello, World! with ");
process .stdout.write(" Hello, World! 2");
//this will print everything in same line

//to have the output in table format
console.table({name:"GARRY",score:"9.18"});
//to simplify the same thing
console.warn({name:"GARRY",score:"9.18"});


//2.Data Types in JS
// //-> this is used for commenting and will not be executed
//datatypes are:-
/*
string
number
boolean
bigint-> used for very large numbers
undefined
null->empty
symbol->to make somthing unique
object
*/

//to define a place hilder we use var ,let,const
let name = "GUR"; //string
let score = 9.18; //number
let isLoggedIn = false; //boolean
let objectExample = [ "key","value" ]; //object
let objectExample2 = { name: "GURKIRAT", score: 9.18 }; //object
console.log(name ,score, isLoggedIn);

//we can change name to other string 
name = "GArry";
console.log(name);

//there is also this const 
const user = 101;
user = 102;//this will give error as const cannot be changed
console.log(user);

//3.Operators in JS
//Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition: ", a + b); //15
console.log("Subtraction: ", a - b); //5
console.log("Multiplication: ", a * b); //50
console.log("Division: ", a / b); //2
console.log("Modulus: ", a % b); //0//remainder
console.log("Exponentiation: ", a ** b); //100000

//Comparison Operators
console.log("Equal to: ", a == b); //false
console.log("Not equal to: ", a != b); //true
console.log("Greater than: ", a > b); //true
console.log("Less than: ", a < b); //false
console.log("Greater than or equal to: ", a >= b); //true
console.log("Less than or equal to: ", a <= b); //false

//Logical Operators
let x = true;
let y = false;
console.log("Logical AND: ", x && y);   //false
console.log("Logical OR: ", x || y);    //true
console.log("Logical NOT: ", !x);       //false
//rest is continued on Documentation2.js
//dated -> 27/01/26
