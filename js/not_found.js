const olFyld = document.getElementById("loading_fyld_ol");
const skum = document.getElementById("skum"); 
const fustage = document.getElementById("fustage"); 
const tap = document.getElementById("tap"); 
const vaske = document.getElementById("not_vaske"); 
const tekst = document.getElementById("not_tekst"); 

tap.addEventListener("click", function() {
  tekst.style.transition = "0.5s all ease-in-out";
  tekst.style.opacity = ("0");

  tap.style.transition = "2s all ease-in-out";
  tap.style.rotate = ("90deg");
  tap.style.bottom = ("70%");
  tap.style.right = ("-8%");

  setTimeout(() => {
    vaske.style.transition = "2s all ease-in-out";
    vaske.style.height = "20dvw";
    vaske.style.top = "72%";
  }, 1000);
  /*
    bottom: 80%;
    right: 2%;
  */

  setTimeout(() => {
    olFyld.style.transition = "3s all ease-in-out";
    olFyld.setAttribute("d", "M276.805 540.217V110.439H-59.707V540.217H276.805Z")
  
    skum.style.transition = "3s all ease-in-out";
    skum.setAttribute("d", "M276.805 35.4496H-59.707V110.439H276.805V35.4496Z")
  }, 2700);

  setTimeout(() => {
    vaske.style.height = "2dvw";
    vaske.style.top = "80%";
  }, 4000);

  setTimeout(() => {
    window.location.href = "index.html";
  }, 6000);
});