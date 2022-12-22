const data = '01 dec 2023'

const day = document.getElementById('day')
const hrs = document.getElementById('hrs')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

function countDown(){
    const timeEvent = new Date(data)
    const today = new Date() 
    const secTotal = (timeEvent - today)/1000; //resultado vem em milisegundos
    const finalDays = Math.floor(secTotal /60 /60 /24)
    const finalHrs = Math.floor(secTotal/60 /60) %24
    const finalMin = Math.floor(secTotal/60) %60
    const finalSec = Math.floor(secTotal) %60
    
    day.innerHTML = timeFormat(finalDays) + 'D'
    hrs.innerHTML = timeFormat(finalHrs) + 'H'
    min.innerHTML = timeFormat(finalMin) + 'M'
    sec.innerHTML = timeFormat(finalSec) + 'S'
}

function timeFormat(time){
    return time < 10? `0${time}` : time;
}
countDown()
setInterval(countDown, 1000)