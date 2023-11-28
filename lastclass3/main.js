let currentDate = new Date();
let date = document.querySelector(".date");
let dateDiv = document.createElement("div");
let otherText = document.createElement("span");
let colors = ["#d959cc", "#59634e", "#91665a", "#ebeb59", "#e0928d"]
let body = document.body;



function displayDate (){
    let clocks = document.createElement("div");
    clocks.classList.add("special");
    body.appendChild(clocks);
    let clockImgs = ["three.png", "six.png", "nine.png", "twelve.png"];
    let currentDate = new Date();
    let randClocks = clockImgs[Math.floor(Math.random()*(clockImgs.length-1))]; 
    clocks.style.backgroundImage = "url(images/" + randClocks;
    date.appendChild(otherText);
    date.appendChild(dateDiv);
    dateDiv.innerHTML = currentDate;
    dateDiv.classList.add("dateDivFun");
    otherText.classList.add("otherTextFun");
    otherText.innerHTML = "Right now it is";
    setInterval(displayDate, 1000);

        
}

function clearPage(){
    dateDiv.innerHTML = " ";
}

displayDate();

