/* Lav variabler som trækker html elementer ind i javascript*/
const generator = document.getElementById("outfit-generator");
const toj = document.getElementsByClassName("toj")
const randomBtn = document.getElementById("random")

/* lav variabler som skifter billederne ud for de forskellige tøjdele*/
let hat = ["img/Toej/cap-1.png", "img/Toej/cap-2.png", "img/Toej/cap-3.png"];
let shirt = ["img/Toej/shirt-1.png", "img/Toej/shirt-2.png", "img/Toej/shirt-3.png"];
let bukser = ["img/Toej/bukser-1.png", "img/Toej/bukser-2.png", "img/Toej/bukser-3.png"];
let sko = ["img/Toej/sko-1.png", "img/Toej/sko-2.png", "img/Toej/sko-3.png"];

/* få en knap til at randomize alt tøjet*/
randomBtn.addEventListener("click", function() {
    toj[0].src = hat[Math.floor(Math.random()*hat.length)]
    toj[1].src = shirt[Math.floor(Math.random()*hat.length)]
    toj[2].src = bukser[Math.floor(Math.random()*hat.length)]
    toj[3].src = sko[Math.floor(Math.random()*hat.length)]
  });


/* randomize det enkelte stykke tøj når man trykker på det */
for (let i = 0; i < toj.length; i++) {
    toj[i].addEventListener("click", function() {
        if (i == 0) {
            toj[i].src = hat[Math.floor(Math.random()*hat.length)]
          } else if (i == 1) {
            toj[i].src = shirt[Math.floor(Math.random()*hat.length)]
          } else if (i == 2) {
            toj[i].src = bukser[Math.floor(Math.random()*hat.length)]
          } else {
            toj[i].src = sko[Math.floor(Math.random()*hat.length)]
          }
    });
  }



