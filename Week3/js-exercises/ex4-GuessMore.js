/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

// Note : In Java Script arrguments passed by value. However in case of complex data structure, the value being passed by reference!

// The output will be 9 because x is a number (primitives data types) so it's pass by value:
// ( we take a copy from x and pass it as an arrgument to the function f1 but the orginal value ( x = 9 ) doesn't changed). 



const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// The output will be {x: 10} because y is an object (complex data types) so it's pass by reference:
// we passed the reference of y as an arrgument to the function f2 so we changing the value inside this address im memory.

