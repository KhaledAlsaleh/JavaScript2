/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.

 */

/* 
function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

*/



function doubleEvenNumbers(numbers){
  const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
  });
  const doubleEvenNumbers = evenNumbers.map((evenNumber) => {
    return evenNumber * 2;
  });
  return doubleEvenNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console





// we can do it in 1 line also :

/*

function doubleEvenNumbers(numbers){
  return numbers.filter(number => number % 2 === 0).map(evenNumber => evenNumber*2);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers));   // Logs "[4, 8]" to the console

*/



