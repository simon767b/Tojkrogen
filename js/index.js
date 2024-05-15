//Vi vil gerne have en funktion der gør det muligt at centrere og forstørre ting når man trykker på dem
//Det skal fungere som en zoom effekt 

//abningstider
let abningstiderZoom = false;
const abningstider = document.getElementById("abningstider");

abningstider.addEventListener("click", function() {
  if (abningstiderZoom == false) {
    abningstider.id = 'forside-zoom'; 
    abningstiderZoom = true;
  } else{
    abningstider.id = 'abningstider'; 
    abningstiderZoom = false;
  }
});

//skilt
let skiltZoom = false;
const skilt = document.getElementById("skilt");

skilt.addEventListener("click", function() {
  if (skiltZoom == false) {
    skilt.id = 'forside-zoom'; 
    skiltZoom = true;
  } else{
    skilt.id = 'skilt'; 
    skiltZoom = false;
  }
});

//computer
let computerZoom = false;
const computer = document.getElementById("computer");
const skærm = document.getElementById("skærm");
const video = document.getElementById("forside-video");

computer.addEventListener("click", function() {
  if (skiltZoom == false) {
    computer.classList.remove("computer_wrapper");
    computer.classList.add("computer_wrapper_animation");

    skærm.style.width = ("80dvw");
    video.style.width = ("50dvw");
    video.style.height = ("36dvw");

    skiltZoom = true;
  } else{
    computer.classList.remove("computer_wrapper_animation");
    computer.classList.add("computer_wrapper");

    skærm.style.width = ("15dvw");
    video.style.width = ("8dvw");
    video.style.height = ("6dvw");
    skiltZoom = false;
  }
});


//Portræt
const portrat = document.getElementById("portrat");

portrat.addEventListener("click", function() {
    portrat.style.bottom = ("0px");
    portrat.style.right = ("0px");
    portrat.style.width = ("100%");
    portrat.style.zIndex = ("1000");

    /*Brugeren føres over til en ny side*/
    setTimeout(() => {
        window.location.href = "http://www.w3schools.com";
    }, 1000);
});

//Lookbook
const lookbook = document.getElementById("lookbook");

lookbook.addEventListener("click", function() {
    lookbook.style.top = ("50%");
    lookbook.style.left = ("50%");
    lookbook.style.transform = ("translate(-50%, -50%");
    lookbook.style.width = ("100%");
    lookbook.style.zIndex = ("1000");

    /*Brugeren føres over til en ny side*/
    setTimeout(() => {
        window.location.href = "http://www.w3schools.com";
    }, 1000);
});


//polaroid
const polaroid1 = document.getElementById("polaroid1");
const polaroid2 = document.getElementById("polaroid2");
const polaroid3 = document.getElementById("polaroid3");
const polaroid4 = document.getElementById("polaroid4");

polaroid1.addEventListener("click", function() {
    polaroid1.id = 'polaroid-animation'; 
    /*efter animationen kommer man ind på en ny side*/
    setTimeout(() => {
        window.location.href = "http://www.w3schools.com";
    }, 1000);
});

polaroid2.addEventListener("click", function() {
    polaroid2.id = 'polaroid-animation'; 
        /*efter animationen kommer man ind på en ny side*/
    setTimeout(() => {
        window.location.href = "http://www.w3schools.com";
    }, 1000);
});

polaroid3.addEventListener("click", function() {
    polaroid3.id = 'polaroid-animation'; 
        /*efter animationen kommer man ind på en ny side*/
    window.location.href = "http://www.w3schools.com";
    setTimeout(() => {
        window.location.href = "http://www.w3schools.com";
    }, 1000);
});

polaroid4.addEventListener("click", function() {
    polaroid4.id = 'polaroid-animation';
        /*efter animationen kommer man ind på en ny side*/ 
    setTimeout(() => {
        window.location.href = "http://www.w3schools.com";
    }, 1000);
});

