/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  // your code goes in here
  let myHobbiesList = document.createElement('ul');
  myHobbiesList.innerText= "Here Is Mine Hobbies:\n\n";
  document.body.insertAdjacentElement('afterbegin', myHobbiesList); // to append ul as first element in body befor script tag!
  //document.body.appendChild(myHobbiesList);

  myHobbiesList.style.listStyle = 'none';
  myHobbiesList.style.fontWeight = 'bold';
  myHobbiesList.style.fontSize = '26px';
  myHobbiesList.style.lineHeight = '1.5';

  arr.forEach(hobby => {
      myHobby = document.createElement('li');
      myHobby.innerText = hobby;
      myHobbiesList.appendChild(myHobby);
      myHobby.style.fontSize = '20px';
  });
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];


createHTMLList(myHobbies);