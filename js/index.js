//splash loadig screen
const olFyld = document.getElementById("loading_fyld_ol");
const skum = document.getElementById("skum"); 
const loadingScreen = document.getElementById("loading_screen"); 

window.addEventListener("load", function() {
    setTimeout(() => {
    olFyld.style.transition = "3s all ease-in-out";
    olFyld.setAttribute("d", "M276.805 540.217V110.439H-59.707V540.217H276.805Z")

    skum.style.transition = "3s all ease-in-out";
    skum.setAttribute("d", "M276.805 35.4496H-59.707V110.439H276.805V35.4496Z")
    }, 1000);


    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 4000);

  });

  
//---------------------------resten af siden-------------------------------

//Vi vil gerne have en funktion der gør det muligt at centrere og forstørre ting når man trykker på dem
//Det skal fungere som en zoom effekt 
let varetpasiden = false;

//for at være sikker på at den læses fra ny hver gang
(function () {
  window.onpageshow = function(event) {
      if (event.persisted) {
          window.location.reload();
      }
  };
})();


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
        window.location.href = "modos.html";
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
        window.location.href = "not_found.html";
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
        window.location.href = "paatur.html";
    }, 1000);
});

polaroid2.addEventListener("click", function() {
    polaroid2.id = 'polaroid-animation'; 
        /*efter animationen kommer man ind på en ny side*/
    setTimeout(() => {
        window.location.href = "bar.html";
    }, 1000);
});

polaroid3.addEventListener("click", function() {
    polaroid3.id = 'polaroid-animation'; 
        /*efter animationen kommer man ind på en ny side*/
    setTimeout(() => {
        window.location.href = "kladeskabet.html";
    }, 1000);
});

polaroid4.addEventListener("click", function() {
    polaroid4.id = 'polaroid-animation';
        /*efter animationen kommer man ind på en ny side*/ 
    setTimeout(() => {
        window.location.href = "vardier.html";
    }, 1000);
});


/* links */
const linkedin = document.getElementsByClassName("linkedin");
const youtube = document.getElementsByClassName("youtube");
const facebook = document.getElementsByClassName("facebook");
const telefon = document.getElementsByClassName("telefon");
const carhart = document.getElementsByClassName("carhart");
const wwf = document.getElementsByClassName("wwf");
const instagram = document.getElementsByClassName("instagram");
const soundcloud = document.getElementsByClassName("soundcloud");
const patagonia = document.getElementsByClassName("patagonia");

for (let i = 0; i < facebook.length; i++) {
facebook[i].addEventListener("click", function() {
      window.location.href = "#";
});
};

for (let i = 0; i < linkedin.length; i++) {
linkedin[i].addEventListener("click", function() {
      window.location.href = "#";
});
};

for (let i = 0; i < telefon.length; i++) {
telefon[i].addEventListener("click", function() {
      window.location.href = "tel:31612629";
});
};

for (let i = 0; i < carhart.length; i++) {
carhart[i].addEventListener("click", function() {
      window.open("https://www.carhartt.com/gb/en-gb");
});
};

for (let i = 0; i < wwf.length; i++) {
wwf[i].addEventListener("click", function() {
  window.open("https://wwf.dk/");
});
};

for (let i = 0; i < instagram.length; i++) {
instagram[i].addEventListener("click", function() {
  window.open("https://www.instagram.com/toejkrogen/");
});
};

for (let i = 0; i < soundcloud.length; i++) {
soundcloud[i].addEventListener("click", function() {
  window.open("https://soundcloud.com/hugo-pecheur-744280348/sets/lo-fi-hip-hop-chillhop");
});
};

for (let i = 0; i < youtube.length; i++) {
youtube[i].addEventListener("click", function() {
  window.open("https://www.youtube.com/watch?v=RR7aP4U2L6o");
});
};

for (let i = 0; i < patagonia.length; i++) {
patagonia[i].addEventListener("click", function() {
  window.open("https://eu.patagonia.com/dk/en/shop/collections/new-arrivals?gad_source=1&gclid=Cj0KCQjw6auyBhDzARIsALIo6v_jhVA120bTTrWBdwSuUX0wJX1gqaKFrMtnrArPwMmlh4X92_0A3iUaAo_sEALw_wcB&gclsrc=aw.ds");
});
};
