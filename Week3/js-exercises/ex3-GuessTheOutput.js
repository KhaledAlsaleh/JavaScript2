/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;   // Declear a variable using let key word , it's a block scope but in this case it's decleard in global so we can access it from next function
const x = (function () {
  a = 12;     // here we re-assign the same variable (a)[they have same address in memory] which decleard in global scope 
  return function () {
   // alert(a);
   console.log(a); // the output will be 12 because we change the value inside the function 
  };
})();

x();

/*

ReferenceError: alert is not defined , but if we replace this line with console.log(a);
the output will be 12  

*/
