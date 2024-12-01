//1.initial timer values
let timer;
let isRunning=false;
let [hours, min, sec, millsec] = [0, 0, 0, 0]; // let hours=0 min=0 let sec


//2. Accessing the all html Elements to update the time

let Display=document.querySelector(".timer-display")
let startBtn=document.querySelector(".start")
let stopBtn=document.querySelector(".stop")
let resetBtn=document.querySelector(".Reset")




// Adding the functionality for  buttons to update the timer
startBtn.addEventListener("click",startTimer)
stopBtn.addEventListener("click",stopTimer)
resetBtn.addEventListener("click",resetTimer)



// Function for startTimer
function startTimer(){
    if(!isRunning){
        isRunning=true;
        timer=setInterval(UpadteTimer, 10);
    }

}



// Function for stopTimer
function stopTimer(){
    if(isRunning){
        isRunning=false;
        clearInterval(timer);
    }

}



// Function for resetTimer
function resetTimer(){
    clearInterval(timer)
    isRunning=false;
    [hours, min, sec, millsec] = [0, 0, 0, 0];
    DisplayTimer(); // Ensure the display updates to 00:00:00:00
    
}



// function To update the Timer
function UpadteTimer(){
    millsec = millsec + 10;
    if(millsec >= 1000) {
        millsec = 0;
        sec++;
        if(sec >= 60) {
            sec = 0;
            min++;
            if(min >= 60){
                min = 0;
                hours++;
            }
        }
    }
    // calling update timer to update display
DisplayTimer();

}


// Function Display 

function DisplayTimer() {
    Display.textContent=`${String(hours).padStart(2,0)}:${String(min).padStart(2,0)}:${String(sec).padStart(2,0)}:${String(millsec).padStart(2,0)}`

}

