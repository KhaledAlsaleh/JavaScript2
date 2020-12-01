/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

// Catch the img element and make sure it start from position 0 let 

'use strict'
// get the img tag from html 
let myImg = document.querySelector('img');

// save the orginal source in a variable
let myImgSrc = myImg.src;

// git the width of image about 296px we need it to get exact middle of screen 
let myImgWidth = myImg.width;

// set the source of dancing cat 
let catDance = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';

// start orginal cat from position 0 left
myImg.style.left = '0px';

// creat fuction for movement
function movement() {
// get the position of orginal cat that started from 0 left and get numbers only without pixels  
  let position = parseInt(myImg.style.left);
  //set the left of cat by adding 10 px and do concatination because the input in style.left is string
  myImg.style.left = (position + 10).toString().concat('px')
  // middle of screen is innerwidth divided by 2 but after deleting the width of image otherwise the middle will be the last bixel from cat becom in the middle 
  let middlePosition = (window.innerWidth - myImgWidth) / 2;
 // let middlePosition = (window.innerWidth) / 2;
 // we need a rang in miidle to recognise the changing
  if (position >= middlePosition - 10 && position <= middlePosition + 10 ) {
 // if (position === middlePosition ) {
    // clear the interval while the cat in middle 
    clearInterval(interval);
    // change the source while cat in the middle 
    myImg.src = catDance;
    // call  function using setTimeout so it will run after 5 seconds
    setTimeout(function () {
    //this function replace the dance cat with the orginal cat and add 20px to the left to make sure that the cat get out the range 
      myImg.src = myImgSrc;
      myImg.style.left = (position + 20).toString().concat('px');
      interval = setInterval(movement,50); // call the function again every 50 millieseconds to continue walking....
    }, 5000);
  }

  if (position > window.innerWidth) { // if the cat get out the screen so I let it start from -300px .... i find that better than starting from 0px { imagin the cat go around your laptop :D }
    myImg.style.left = '-300px';
  }

}
// call the function to let the cat walking every 50 millieseconds and save it in variable to use it when i need to clear the interval !
let interval = setInterval(movement, 50);

/* I also try anothe ways using using transform and translate to change the position and i creat waiting function to let the cat
waiting for 5 seconds , using 2 new date and the subtraction must be smaller than 5000 ms , and in other way i used requestAnimationFrame and cancleanimationframe but i couldnt let the cat continue walking ...
the following comments are not working 100 % ... i was testing many lines and delete some of them and see the result on screen 
*/


//myImg.style.transform = "translateX(" + position +"px)";

// Creat variable to get the current time in milliseconds 
//let startTime = new Date().getTime();
//console.log(startTime);


/* function wait(ms) { 
  
  let d = new Date();
  let d2 = null;
  do {
    d2 = new Date();
  } while (d2 - d < ms);
  myImg.src = myImgSrc; 
}  */



//let movement =setInterval( function (){
    // Store the moment that this function start every time  
    //let currentTime = new Date().getTime();
    //let secondsElapsed = ((currentTime - startTime)/1000); // every seconds = 1000 milliseconds
    //let newPosition = pos + 10;
//  myImg.style.transform = "translateX(" + pos +"px)";
//    pos+=10;
    //window.cancelAnimationFrame(movement);
//        if( pos === 700){
 //          myImg.src = 'pic1.gif';
          // setTimeout(movement,5000);
           //se
//        }
//      if(pos > 800){

//            myImg.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
//        }

           // setTimeout(movement,5000);
        //    
         //  clearInterval(movement);
           //setTimeout(movement,5000);
          // window.requestAnimationFrame(movement,5000);
            //setInterval(movement,5000);
           // window.requestAnimationFrame(movement,5000);
         
//        if(pos > window.innerWidth){
//            pos = -296;
//        }
//    },50);
        
        //else if(pos == screen.width/2){
           // myImg.src = 'tenor.gif';
           // clearInterval(movement);
        //}       
          //  clearInterval(movement);                                 
        // } //window.cancelAnimationFrame(catWalk)
     //   }else if (! newPosition == screen.width/2){
     //       window.cancelAnimationFrame(movement);
        //else if(pos == screen.width){
        //myImg.style.left = '0px';
        //window.cancelAnimationFrame(movement);
    //}    

//myImg.src= 'tenor.gif';
//console.log(myImg.src);
//console.log(screen.width);
//catWalk();
//setInterval(catWalk,50);




//myImg.style.left = '10px';
//window.requestAnimationFrame(catWalk);
//console.log(myImg.style.left);
//catWalk();
//catWalk();
 // if(newPosition <= ((screen.width/2)-250)){
    //  window.requestAnimationFrame(catWalk);
   // }
   // if(newPosition == ((screen.width/2)-200)){
   //     myImg.style.visibility = 'none';
   // }
    //window.requestAnimationFrame(catWalk);
    //console.log(window.innerWidth/2);
   // console.log(screen.width/2);
   // console.log(window.width)