/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

 
let initialValue = 25;
let initialSeconds = '00';
let startIntervel;

let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let sessionLength = document.getElementById('sessionLength');

seconds.textContent = initialSeconds;
minutes.textContent = initialValue;
sessionLength.textContent = initialValue;

document.getElementById('down').onclick = function() {
    if(startIntervel === undefined){     // we can use document.getElementById("down").disabled = true; to disable this button while counting is running
        initialValue--;
        sessionLength.textContent = initialValue;
        if(initialValue > 0){
            minutes.style.visibility = 'visible';
            seconds.style.visibility = 'visible';
            minutes.style.display = 'inline';
            seconds.style.display = 'inline';
            seconds.textContent = initialSeconds;
            minutes.textContent = initialValue;
            document.getElementById('between').textContent = ':';
        } else{
            minutes.style.visibility = 'hidden';
            seconds.style.visibility = 'hidden';
            document.getElementById('between').textContent = 'Time is up!';
        }
    }
};

document.getElementById('up').onclick = function() {
    if(startIntervel === undefined){
        initialValue++;
        sessionLength.textContent = initialValue;
        if(initialValue > 0 ){
            minutes.style.visibility = 'visible';
            seconds.style.visibility = 'visible';
            minutes.style.display = 'inline';
            seconds.style.display = 'inline';
            minutes.textContent = initialValue;
            seconds.textContent = initialSeconds;
            document.getElementById('between').textContent = ':';
        } else {
            minutes.style.visibility = 'hidden';
            seconds.style.visibility = 'hidden';
            document.getElementById('between').textContent = 'Time is up!';
        }
    }

};

// countDown Function

function countDown(){   
    if(seconds.textContent != 0){
        seconds.textContent--;
    }else if(minutes.textContent != 0 && seconds.textContent == 0){
        seconds.textContent = 59;
        minutes.textContent--;
    }
    if(seconds.textContent < 10){
        seconds.textContent = '0'+seconds.textContent;
     //   console.log(seconds.textContent); // this line for test the value on consol ...
        if (minutes.textContent == 0 && seconds.textContent == 0){
            minutes.style.display ='none';
            seconds.style.display ='none';
            document.getElementById('between').textContent = 'Time is up!';
            clearInterval(startIntervel);
        }
    }
}


const startBtn = document.getElementById('playStop');
startBtn.title = 'Click For Play!';

function playAndStop (){
    if(startIntervel === undefined){
        startIntervel = setInterval(countDown,1000);
        startBtn.innerHTML = 'Reset';
        startBtn.title = 'Click For Reset!';
    //    document.getElementById('up').style.backgroundColor = 'red';
    //    document.getElementById('down').style.backgroundColor = 'red';
    }if (startIntervel != undefined){
        reset();
    }
    startAgain(minutes.textContent,sessionLength.textContent);
}

function reset(){
    startBtn.onclick = () => {
            clearInterval(startIntervel);
            minutes.style.display = 'inline';
            seconds.style.display = 'inline';
            minutes.textContent = sessionLength.textContent;
            seconds.textContent = initialSeconds;
            document.getElementById('between').textContent = ':';
            startIntervel = undefined;
            startBtn.innerHTML = 'Start';
            startBtn.title = 'Double Click For Start Again!'
        };
}

function startAgain(a,b){
    if(a == b){
        startBtn.ondblclick = () => {
            startIntervel = setInterval(countDown,1000);
            startBtn.innerHTML = 'Reset';
            startBtn.title = 'Click For Reset!';
        }
    }
}

startBtn.addEventListener('click',playAndStop);



// Pause Logic 

let pauseBtn = document.getElementById('pause');
pauseBtn.title = 'Click For Pause!'

function pauseAndResume(){
    if(startIntervel != undefined){
        clearInterval(startIntervel);
        pauseBtn.innerHTML = 'Resume';
        pauseBtn.title = 'Double Click For Resume!'
    }
    resumeCount(minutes.textContent,sessionLength.textContent);
}

function resumeCount(a,b){
    if(a != b){
        pauseBtn.ondblclick = () => {
            startIntervel = setInterval(countDown,1000);
            pauseBtn.innerHTML = 'Pause';
            pauseBtn.title = 'Click For Pause!'
        }
    }
}


pauseBtn.addEventListener('click',pauseAndResume);

// function pauseCount (){
//     clearInterval(startIntervel);
// }

// function continueCount (){
//     setInterval(countDown,1000);
// }


// pauseBtn.addEventListener('click', () =>{
//     if(startIntervel !=undefined){
//         clearInterval(startIntervel);
//         console.log(startIntervel);
//     }
//     if(minutes.textContent != sessionLength.textContent){
//         startBtn.ondblclick = () => {
//             startIntervel = setInterval(countDown,1000);
//             pauseBtn.innerHTML = 'Resume';
//             startBtn.title = 'Click For Resume!';
//         }
//     }
// });



// startBtn.onclick = () =>{
//     startIntervel = setInterval(countDown,1000);
// };

    // } if (startIntervel === undefined){
    //     startBtn.onclick = () =>{
    //         console.log(startIntervel);
    //         startIntervel = setInterval(countDown,1000);
    //     } 



   // if (minutes.textContent > 0){
            //     if(seconds.textContent === 0){
            //         seconds.textContent = 12;
            //         seconds.textContent--;
            //         minutes.textContent--;
            //     }else if(seconds.textContent > 0){
            //         if(seconds.textContent > 0 && seconds.textContent < 10){
            //             seconds.innerHTML = '0'+seconds.textContent;
            //             seconds.textContent--; 
            //         }else {
            //             seconds.textContent--;
            //         }
            //     } 
            // }else if(minutes.textContent === 0){
            //     if(seconds.textContent === 0){
            //         minutes.style.display ='none';
            //         seconds.style.display ='none';
            //         document.getElementById('between').textContent = 'Time is up!';
            //     }
            //     else if(seconds.textContent > 0){
            //         if(seconds.textContent > 0 && seconds.textContent < 10){
            //             seconds.innerHTML = '0'+seconds.textContent;
            //             seconds.textContent--; 
            //         }else {
            //             seconds.textContent--;
            //         }
            
            //     }
            // }












//startBtn.onclick = setInterval(countDown,1000);





// function countDown(){
//     setInterval(function(){
//         if(minutes.textContent <= 0){
//             clearInterval(minutes.textContent = 0)
//         }
//         if(minutes.textContent>0){
//             minutes.textContent -=1;
//         }  
//     },1000);
// }

// startBtn.addEventListener('click', countDown);

// countDown Function


 