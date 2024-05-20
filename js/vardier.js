//tøj forhæng
const forhang = document.getElementById("vardier_forhæng");

forhang.addEventListener("mouseover", function() {
        forhang.style.transition = "1s all ease-in-out";
        forhang.style.left = "23%";
        forhang.style.width = "5dvw";
  });

//tøj 1. række
const tojAa = document.getElementById("vardier_toj1_1");
const tojAb = document.getElementById("vardier_toj1_2");
const tojAc = document.getElementById("vardier_toj1_3");

tojAb.addEventListener("mouseover", function() {
    

    tojAb.style.transition = "1s all ease-in-out";
    tojAb.style.left = "78%";
    tojAb.style.width = "10dvw";

    tojAc.style.transition = "1s all ease-in-out";
    tojAc.style.left = "87%";

  });

//tøj 2. række
const tojBa = document.getElementById("vardier_toj2_1");
const tojBb = document.getElementById("vardier_toj2_2");
const tojBc = document.getElementById("vardier_toj2_3");

tojBb.addEventListener("mouseover", function() {
    tojBa.style.transition = "1s all ease-in-out";
    tojBa.style.left = "38%";
    tojBa.style.width = "10dvw";

    tojBb.style.transition = "1s all ease-in-out";
    tojBb.style.left = "50%";
    tojBb.style.width = "10dvw";
  });

//tøj 3. række
const tojCa = document.getElementById("vardier_toj3_1");
const tojCb = document.getElementById("vardier_toj3_2");

tojCa.addEventListener("mouseover", function() {
    tojCa.style.transition = "1s all ease-in-out";
    tojCa.style.left = "42%";
    tojCa.style.width = "10dvw";

    tojCb.style.transition = "1s all ease-in-out";
    tojCb.style.left = "78%";
    tojCb.style.width = "10dvw";

  });

  tojCb.addEventListener("mouseover", function() {
    tojCa.style.transition = "1s all ease-in-out";
    tojCa.style.left = "42%";
    tojCa.style.width = "10dvw";

    tojCb.style.transition = "1s all ease-in-out";
    tojCb.style.left = "78%";
    tojCb.style.width = "10dvw";

  });

