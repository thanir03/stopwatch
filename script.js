// timer array to store all time value
let timer = [0,0,0,0]
// selecting time and buttons from html doc
let timeDisplay = document.querySelector("#time")
let startButton = document.querySelector("#start")
let stopButton = document.querySelector("#stop")
let resetButton = document.querySelector("#reset")


// adding eventlistener for clicks
startButton.addEventListener("click",startFunc)
stopButton.addEventListener("click",stopFunc)
resetButton.addEventListener("click",resetFunc)

// global interval to allow clear inteval
let interval ;

// To start the timer
function startFunc() {
    stopFunc()
    interval = setInterval(function() {
        startTimer(timer)
        display(timer)
    },10)
    
}
// To display on html file
function display(timer){
   let [hour,minute,second,milisecond] = [timer[0],timer[1],timer[2],timer[3]] 
    if(timer[3]<10){
        milisecond = `0${timer[3]}`
    }
    if(timer[2]<10){
        second = `0${timer[2]}`
    }
    if(timer[1]<10){
        minute = `0${timer[1]}`
    }
    if(timer[0]<10){
        hour = `0${timer[0]}`
    }
    timeDisplay.textContent = `${hour}:${minute}:${second}:${milisecond}`
}
// stop the interval
function stopFunc() {
    clearInterval(interval)
}
// to reaset the time
function resetFunc() {
    stopFunc()
    timer = [0,0,0,0]
    display(timer)
}

// To add time according to math rules
function startTimer(timer){
    if(timer[3]===99){
        timer[2]++
        timer[3] = 0
    }else if(timer[2]===59){
        timer[1] ++
        timer[2] = 0 
    }else if(timer[1]===59){
        timer[0] ++
        timer[1] = 0
    }else{
        timer[3]++
    }
    return timer
}


// Additional informations
// timer[0] = hour
// timer[1] = minute
// timer[2] = second
// timer[3] = millisecond