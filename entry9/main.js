let body = document.body;
let goodones = document.querySelector(".goodones");
let duds =  document.querySelector(".duds");
let goodones2 = document.querySelector(".goodones2");
let duds2 = document.querySelector(".duds2");


function showDuds(){
    goodones.classList.toggle("goodoneshide");
    duds.classList.toggle("dudsshow");
}

goodones.addEventListener("click", showDuds);

function showDuds2(){
    goodones2.classList.toggle("goodoneshide2");
    duds2.classList.toggle("dudsshow2");
}

goodones2.addEventListener("click", showDuds2);


let goodoneshide2 = document.querySelector(".goodoneshide2");
let dudsshow2= document.querySelector("dudsshow2");

function goBack(){
    dudsshow2.classList.toggle("duds2");
    goodoneshide2.classList.toggle("goodones2");
}

dudsshow2.addEventListener("click", goBack);


//let goodoneshide = document.querySelector("goodoneshide");
//let dudsshow = document.querySelector("dudsshow");

//function goBack(){
//    dudsshow.classList.toggle("duds");
//    goodoneshide.classList.toggle("goodones");
//}

//dudsshow.addEventListener("click", goBack);
