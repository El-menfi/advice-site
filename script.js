
const months = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];
const rundownEl  = document.getElementById("rundown");
const responseEl = document.getElementById("response-id");
let timer;
let hasListened=false;

function listen(){
    hasListened=true
clearInterval(timer);
rundownEl.style.display  = "block";
responseEl.style.display = "none";

timer = setInterval(function(){
const today = new Date();
const year       = today.getFullYear();
const exactMonth = months[today.getMonth()];
const day        = today.getDate();
const minute     = today.getMinutes();
const second     = today.getSeconds();

// ---- 12-hour conversion ----
const rawHour = today.getHours();        // 0–23
let displayHour = rawHour % 12;
if (displayHour === 0) displayHour = 12; // 0 -> 12
const period = rawHour < 12 ? "AM" : "PM";

rundownEl.innerHTML =
    `It's exactly ${year} and we are in the motherfuckin month of ${exactMonth}.<br>` +
    `But guess what ... you are still single like toothpick and we are in day ${day} of the fckin month.<br>` +
    `It's ${displayHour}:${String(minute).padStart(2, "0")} ${period} ` +
    `ah well, lift your ass and go look for someone you can call babe.<br>` + 
    `Hurry up ...we want wedding jollof to eat ...tswww<br>` +
    `Seconds are running : ${second}<br>`+
    `You single creature`;
}, 1000);
}

function reply(){
    if (!hasListened){
        alert("Listen to advice before!");
    return;   // stop — don't run the rest
}
    clearInterval(timer);
    rundownEl.style.display  = "none";
    responseEl.style.display = "block";
    responseEl.innerHTML =
        "You want to reply who?<br>You vex a, e dey your pocket inside.<br><br><br>#Electromotive himself";
}
