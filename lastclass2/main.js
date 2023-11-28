let currentDate = new Date();
let date = document.querySelector(".date");
let button = document.querySelector(".button");
    let dateDiv = document.createElement("div");

function displayDate (){
    let currentDate = new Date();
    date.appendChild(dateDiv);
    dateDiv.innerHTML = currentDate;
    dateDiv.classList.add("dateDivFun");
    
}

function clearPage(){
    dateDiv.innerHTML = " ";
}

displayDate();

button.addEventListener("click", clearPage);
button.addEventListener("click", displayDate);