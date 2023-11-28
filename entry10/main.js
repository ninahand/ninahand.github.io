let button = document.querySelector(".button");
let buttontwo = document.querySelector(".buttontwo");
let change = document.querySelector(".change");
let changeagain= document.querySelector(".changeagain");
let firsttext = document.querySelector(".firsttext");
let secondtexthide = document.querySelector(".secondtexthide");
let thirdclasshide = document.querySelector(".thirdclasshide");

function changeone() {
    change.classList.toggle("changeone");
    secondtexthide.classList.toggle("secondtext");
    secondtexthide.classList.toggle("secondtexthide");
    firsttext.classList.toggle("firsttexthide");
}
function changetwo(){
    changeagain.classList.toggle("changefinal");
    
}
button.addEventListener("click", changeone);
buttontwo.addEventListener("click", changetwo);

//start "change" out as unstylized html (entry 1)
//have words that describe what this is looking like
    //called "firsttext", set display to show
//have button that makes "change"  slightly stylized (entry 2)
//show new words with description, hide the old ones
    //change "firsttext" to "firsttexthide"
    //set "firsttexthide" display to none
//have button change words when clicked
//click button again and "change" become fully stylized (further entries)
//again, hide old words, show new ones for new styling


let rulebuttonone = document.querySelector(".rulebuttonone");
let ruleonehide = document.querySelector(".ruleonehide");

let rulebuttontwo = document.querySelector(".rulebuttontwo");
let ruletwohide = document.querySelector(".ruletwohide");

let rulebuttonthree = document.querySelector(".rulebuttonthree");
let rulethreehide = document.querySelector(".rulethreehide");

let rulebuttonfour= document.querySelector(".rulebuttonfour");
let rulefourhide = document.querySelector(".rulefourhide");

let rulebuttonfive= document.querySelector(".rulebuttonfive");
let rulefivehide = document.querySelector(".rulefivehide");

let rulebuttonsix= document.querySelector(".rulebuttonsix");
let rulesixhide = document.querySelector(".rulesixhide");

let rulebuttonseven= document.querySelector(".rulebuttonseven");
let rulesevenhide = document.querySelector(".rulesevenhide");

let rulebuttoneight= document.querySelector(".rulebuttoneight");
let ruleeighthide = document.querySelector(".ruleeighthide");

let rulebuttonnine= document.querySelector(".rulebuttonnine");
let ruleninehide = document.querySelector(".ruleninehide");

let rulebuttonten= document.querySelector(".rulebuttonten");
let ruletenhide = document.querySelector(".ruletenhide");

function showone() {
    ruleonehide.classList.toggle("ruleone");
}
function showtwo() {
    ruletwohide.classList.toggle("ruletwo");
}
function showthree() {
    rulethreehide.classList.toggle("rulethree");
}
function showfour() {
    rulefourhide.classList.toggle("rulefour");
}
function showfive() {
    rulefivehide.classList.toggle("rulefive");
}
function showsix() {
    rulesixhide.classList.toggle("rulesix");
}
function showseven() {
    rulesevenhide.classList.toggle("ruleseven");
}
function showeight() {
    ruleeighthide.classList.toggle("ruleeight");
}
function shownine() {
    ruleninehide.classList.toggle("rulenine");
}
function showten() {
    ruletenhide.classList.toggle("ruleten");
}



rulebuttonone.addEventListener("click", showone);
rulebuttontwo.addEventListener("click", showtwo);
rulebuttonthree.addEventListener("click", showthree);
rulebuttonfour.addEventListener("click", showfour);
rulebuttonfive.addEventListener("click", showfive);
rulebuttonsix.addEventListener("click", showsix);
rulebuttonseven.addEventListener("click", showseven);
rulebuttoneight.addEventListener("click", showeight);
rulebuttonnine.addEventListener("click", shownine);
rulebuttonten.addEventListener("click", showten);




//have steps 1-6 be buttons that can be clicked to reveal text which are the steps
//show only button before clicking
    //button1- click- show text
    //repeat