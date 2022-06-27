const hourEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const am_pmEl = document.getElementById("am-pm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am_pm = "AM";

    if(h > 12)
    {
        h = h - 12;
        am_pm = "PM";
    }

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondEl.innerText = s;
    am_pmEl.innerText = am_pm;
    setTimeout(()=>{updateClock();}, 1000)
}

updateClock();

