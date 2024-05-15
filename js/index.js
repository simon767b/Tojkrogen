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

computer.addEventListener("click", function() {
  if (skiltZoom == false) {
    computer.id = 'forside-zoom'; 
    skiltZoom = true;
  } else{
    computer.id = 'skilt'; 
    skiltZoom = false;
  }
});
