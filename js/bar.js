//kaffepriser
let kaffepriserZoom = false;
const kaffepriser = document.getElementById("kaffepriser");

kaffepriser.addEventListener("click", function() {
    if (kaffepriserZoom == false) {
        kaffepriser.id = "bar-zoom"; 
      kaffepriserZoom = true;
    } else{
        kaffepriser.id = "kaffepriser"; 
      kaffepriserZoom = false;
    }
  });

//kaffepriser
let olpriserZoom = false;
const olpriser = document.getElementById("olpriser");

olpriser.addEventListener("click", function() {
    if (olpriserZoom == false) {
        olpriser.id = "bar-zoom"; 
        olpriserZoom = true;
    } else{
        olpriser.id = "olpriser"; 
        olpriserZoom = false;
    }
  });

//Art By Maria
let artbymariaZoom = false;
const keramikpriser = document.getElementById("bar_artbymaria");

keramikpriser.addEventListener("click", function() {
    if (artbymariaZoom == false) {
        keramikpriser.id = "bar-zoom"; 
        artbymariaZoom = true;
    } else{
        keramikpriser.id = "bar_artbymaria"; 
        artbymariaZoom = false;
    }
  });