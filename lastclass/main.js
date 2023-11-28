let currentDate = new Date();
let date = document.querySelector(".date");


function displayDate (){
    let dateDiv = document.createElement("div");
    date.appendChild(dateDiv);
    dateDiv.innerHTML = currentDate;
    dateDiv.classList.add("dateDivFun");
}

displayDate();