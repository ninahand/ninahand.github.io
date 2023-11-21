let body = document.body;
let goodones = document.querySelector(".goodones");
let duds =  document.querySelector(".duds");


function showDuds(){
    goodones.classList.toggle("goodoneshide");
    duds.classList.toggle("dudsshow");
}

goodones.addEventListener("click", showDuds);

let goodoneshide = document.querySelector("goodoneshide");
let dudsshow = document.querySelector("dudsshow");

function goBack(){
    dudsshow.classList.toggle("duds");
    goodoneshide.classList.toggle("goodones");
}

dudsshow.addEventListener("click", goBack);
