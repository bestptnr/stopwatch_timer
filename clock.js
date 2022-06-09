const timeDisplay = document.getElementById('timeDisplay')
const btnstart = document.getElementById('btnstart')
const btnstop = document.getElementById('Stop')
const reset = document.getElementById('Reset')
const setTime = document.getElementById('setTime')
const timerstart = document.getElementById('timerstart')
const timerstop = document.getElementById('timerstop')
const timerrest =document.getElementById('timerreset')
const timerDisplay = document.getElementById('timerDisplay')
let timeStart = 0
let pause = true
let pauseTimer = true
let check
let sec=0
let min=0
let hr=0
let timersec,timermin,timerhr
let displaySec,displayMin,displayHr
let displayTimerSec,displayTimerMin,displayTimerHr
let intervalTimer;
let intervalTime
btnstart.addEventListener('click',()=>{
    if(pause){
        pause=false
        intervalTime = setInterval(() => {
            sec++;
            if(sec/60 == 1){
                sec = 0
                min++
                if(min/60 ==1){
                    min = 0;
                    hr++
                }
            }
            if(sec < 10){
                displaySec = "0"+sec
            }else{
                displaySec = sec
            }
            if(min < 10){
                displayMin = "0"+min
            }else{
                displayMin = min
            }
            if(hr < 10){
                displayHr = "0"+hr
            }else{
                displayHr = hr
            }
        timeDisplay.innerHTML = displayHr+":"+displayMin+":"+displaySec
        
        }, 1000);
    }
})
btnstop.addEventListener('click',()=>{
    if(!pause){
       window.clearInterval(intervalTime)
       pause=true
    }
})
reset.addEventListener('click',()=>{
    sec=0,min=0,sec=0
    timeDisplay.innerHTML="00:00:00"
})
setTime.addEventListener('click',()=>{
    let time=prompt("กรอกเวลาที่ต้องการนับถอยหลังเช่น 01:10:59")
    let splitTimer = time.split(":")
    timersec = parseInt(splitTimer[2])
    timermin = parseInt(splitTimer[1])
    timerhr = parseInt(splitTimer[0])
    timerDisplay.innerHTML=time
  
})

timerstart.addEventListener('click',()=>{
    intervalTimer = setInterval(()=>{
        if(pauseTimer){
            pauseTimer=false
            timersec--
            if(timersec == -1){
                timersec=59
                timermin--
                if(timermin == -1){
                    timermin =59
                    timerhr--
                    if(timerhr==-1){
                        clearInterval(intervalTimer)
                        timerDisplay.innerHTML="00:00:00"
                    }
                }
 
            }
        }
        if(timersec < 10){
            displayTimerSec = "0"+timersec
        }else{
            displayTimerSec = timersec
        }
        if(timermin < 10){
            displayTimerMin = "0"+timermin
        }else{
            displayTimerMin = timermin
        }
        if(timerhr < 10){
            displayTimerHr = "0"+timerhr
        }else{
            displayTimerHr = timerhr
        }
        if(timerhr==-1){
            timerDisplay.innerHTML="00:00:00"
        }else{
            timerDisplay.innerHTML=displayTimerHr+":"+displayTimerMin +":"+displayTimerSec
        }
       
    },1000)
})
timerstop.addEventListener('click',()=>{
    console.log("Faaaaaa")
    if(!pauseTimer){
        window.clearInterval(intervalTimer)
        pauseTimer=true
     }
})
timerrest.addEventListener('click',()=>{
    timerhr=0,timermin=0,timersec=0
    timerDisplay.innerHTML="00:00:00"

})