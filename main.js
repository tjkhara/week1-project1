/*
=======================================================

** Week 1 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

EXAMPLE:
// 1. Log your 'hello world' to the console.
console.log("Question 1")
console.log("hello world")

BASIC TRACK: 1-7
ADVANCED TRACK: 8-11
=======================================================
*/



// 1. Log your name to the console (as a string).

console.log("Question 1");
console.log("TJ Khara");




// 2. Declare a new variable called 'name',
//    and then log it to the console.

console.log("Question 2");
var name;
console.log(name);

// When I do this on codepen - I am not sure why, it the result is CodePen.





// 3. Declare two variables with number values.
//    Add, subtract, multiply and divide them.

console.log("Question 3");

var numone = 1;
var numtwo = 2;

console.log(numone + numtwo);
console.log(numone - numtwo);
console.log(numone * numtwo);
console.log(numone / numtwo);

// assuming the way to display the results of the calculations is console.log



// 4. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places a space between the strings.

console.log("Question 4");

var stringone = "hello", stringtwo = "world";
var totalstring = stringone + stringtwo;
var totalstring = stringone + " " + stringtwo;
console.log(totalstring);



// 5. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the console.

console.log("Question 5");

console.log('5' + '3'); // seems like simple concatenation
console.log('5' - '3'); // seems like JS is first converting these into numbers and them performing the subtraction
console.log('5' * '3'); // converting to numbers
console.log('5' / '3'); // converting to numbers



// 6. Create an simple alert stating anything you wish. 

console.log("Question 6");
alert ("hello");



// 7. Create a prompt that asks a user to pick a number.
//    Then double user's answer.

console.log("Question 7");

var numberpicked = prompt ("Pick a number");

var doublenumber = 2 * numberpicked;

console.log (doublenumber);


// ADVANCED TRACK

// 8. Ask for a user's name, age and city.
//    In a single command display/log the sentence:
//   "My name is __. I'm __ years old, and I live in __."

console.log("Question 8");

var name, age, city;
name = prompt("Please enter your name");
age = prompt("Please enter your age");
city = prompt("Please enter your city");
console.log("My name is " + name + ". I'm " + age + " years old, and I live in " + city + ".");


// 9. Create an alert that displays the response from a prompt. You can prompt the user for any kind of fun response. 


console.log("Question 9");

var response;
response = prompt ("What is your name?");
alert(response);


// 10. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the console. 

console.log("Question 10");

var length, breadth;

length = 2;
breadth = 3;

var area = length * breadth;

console.log(area);


// 11. Prompt a user for their name. Find the length (number of characters) of their name and display the result in the console. 

console.log("Question 11");

var name;
name = prompt("What's your name?");
var namelength = name.length;
console.log(namelength);
