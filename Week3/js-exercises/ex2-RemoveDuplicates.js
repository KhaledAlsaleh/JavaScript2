/**
 
 ** Exercise 2: The lottery machine **
 Write a function called removeDuplicates. This function accept an array as an argument
 does not return anything but removes any duplicate elements from the array.

 The function should remove duplicate elements. So the result should be:
 ['a', 'b', 'c', 'd', 'e', 'f']

 */

/**
 * Checks your solution against correct solution
 * @param {Array} array your solution
 * @returns boolean
 */
function checkSolution(array) {
  const solution = ['a', 'b', 'c', 'd', 'e', 'f'];
  if (array == null) return false;
  if (array.length !== solution.length) return false;

  for (let i = 0; i < solution.length; i++) {
    if (array[i] !== solution[i]) return false;
  }
  return true;
}

// WRITE YOUR FUNCTION HERE

// We have different ways to remove dublicat from an array 

// Starting with Set :  Set will automatically remove duplicates for us.



function removeDuplicates(oldArray){
  const tampletArray = new Set(oldArray);  // convert the array into set which has unique items only
  const newArray = [...tampletArray];  //using spread operator to extract set items and put them in array
  console.log(newArray);
}


const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
removeDuplicates(letters);
//console.log(letters);
if (checkSolution(letters)) {
  console.log("Hooray!");
} 



// Another option is to use filter().

/*

function removeDuplicates(oldArray){
  const tampletArray = (oldArray) => oldArray.filter((a,i) => oldArray.indexOf(a) === i);
  const newArray = tampletArray(oldArray);
  console.log(newArray);
}


const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
removeDuplicates(letters);

if (checkSolution(letters)) {
  console.log("Hooray!");
}

*/

// We can use forEach().

/*

function removeDuplicates(oldArray){
  let unique = {};
  oldArray.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  console.log(Object.keys(unique));
}


const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
removeDuplicates(letters);

if (checkSolution(letters)) {
  console.log("Hooray!");
}

*/