// This function I learned online in order to display the current time/date on the user's screen and change coloraccordingly
function updateTimeAndDate() {
    var currentDate = new Date();
    var currentTime = currentDate.toLocaleTimeString();
    var currentDateStr = currentDate.toDateString();
    var dateTimeString = currentTime + ' on ' + currentDateStr;
    document.getElementById('time-date').innerText = dateTimeString;
    var currentHour = currentDate.getHours();
    var backgroundColor;
    if (currentHour>=5 && currentHour < 12)
    {
        backgroundColor = '#e5e8d1';
    }
    else if (currentHour>=12 && currentHour < 20){
        backgroundColor = '#66756b';
    }
    else if(currentHour>=20 && currentHour <5){
        backgroundColor = '#12213b'
    }
    document.body.style.backgroundColor = backgroundColor;

}
updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);


let longtimebutton = document.querySelector(".longtimebutton");
let recentlybutton = document.querySelector(".recentlybutton");

let longtimewords = document.querySelector(".longtimewords");
let recentlywords = document.querySelector(".recentlywords");

function longtimeEvent() {
    longtimewords.classList.toggle("longtimeshow");
}

function recentlyEvent() {
    recentlywords.classList.toggle("recentlyshow");
}

longtimebutton.addEventListener("click", longtimeEvent);
recentlybutton.addEventListener("click", recentlyEvent);

let badbutton = document.querySelector(".badbutton");
let goodbutton = document.querySelector(".goodbutton");

let badwords = document.querySelector(".badwords");
let goodwords = document.querySelector(".goodwords");

function badEvent(){
    badwords.classList.toggle("badwordsshow");
}

function goodEvent(){
    goodwords.classList.toggle("goodwordsshow");
}

badbutton.addEventListener("click", badEvent);
goodbutton.addEventListener("click", goodEvent)

let timeDateContainer = document.querySelector(".time-date-container");

function titleChange(){
    timeDateContainer.classList.toggle("time-date-container-mouse")
}

timeDateContainer.addEventListener("mouseover",titleChange);