/* Lav variabler som trækker html elementer ind i javascript*/
const toj = document.getElementsByClassName("toj")
const randomBtn = document.getElementById("random")
hatNummer = 0;
shirtNummer = 0;
bukserNummer = 0;
skoNummer = 0;

/* lav variabler som skifter billederne ud for de forskellige tøjdele, fortæller noget om pris og farve*/
//her gør man brug af objects inde i et array

let hat = [
    {
        "image": "img/Toej/klader/cap-1.png",
        "color": "grøn",
        "pris": 80
    },
    {
        "image": "img/Toej/klader/cap-2.png",
        "color": "lilla",
        "pris": 85
    },
    {
        "image": "img/Toej/klader/cap-3.png",
        "color": "sand",
        "pris": 90
    }
];

let shirt = [
    {
        "image": "img/Toej/klader/shirt-1.png",
        "color": "sand",
        "pris": 120
    },
    {
        "image": "img/Toej/klader/shirt-2.png",
        "color": "sand",
        "pris": 125
    },
    {
        "image": "img/Toej/klader/shirt-3.png",
        "color": "gul",
        "pris": 150
    }
];


let bukser = [
    {
        "image": "img/Toej/klader/bukser-1.png",
        "color": "grøn",
        "pris": 140
    },
    {
        "image": "img/Toej/klader/bukser-2.png",
        "color": "grøn",
        "pris": 150
    },
    {
        "image": "img/Toej/klader/bukser-3.png",
        "color": "brun",
        "pris": 160
    }
];


let sko = [
    {
        "image": "img/Toej/klader/sko-1.png",
        "color": "hvid",
        "pris": 200
    },
    {
        "image": "img/Toej/klader/sko-2.png",
        "color": "grøn",
        "pris": 210
    },
    {
        "image": "img/Toej/klader/sko-3.png",
        "color": "sort",
        "pris": 230
    }
];



/* få en knap til at randomize alt tøjet*/
randomBtn.addEventListener("click", function() {
    if (låst[0] == false) {
        hatNummer = Math.floor(Math.random()*hat.length)
        toj[0].src = hat[hatNummer].image;
    }

    if (låst[1] == false) {
        shirtNummer = Math.floor(Math.random()*shirt.length)
        toj[1].src = shirt[shirtNummer].image;
    }

    if (låst[2] == false) {
        bukserNummer = Math.floor(Math.random()*bukser.length)
        toj[2].src = bukser[Math.floor(bukserNummer)].image;
    }

    if (låst[3] == false) {
        skoNummer = Math.floor(Math.random()*sko.length)
        toj[3].src = sko[skoNummer].image;
    }

    


    andenPris();
  });


/* randomize det enkelte stykke tøj når man trykker på det */
for (let i = 0; i < toj.length; i++) {
    toj[i].addEventListener("click", function() {
        if (i == 0) {
            hatNummer = Math.floor(Math.random()*hat.length)
            toj[i].src = hat[hatNummer].image
          } else if (i == 1) {
            shirtNummer = Math.floor(Math.random()*shirt.length)
            toj[i].src = shirt[shirtNummer].image
          } else if (i == 2) {
            bukserNummer = Math.floor(Math.random()*bukser.length)
            toj[i].src = bukser[bukserNummer].image
          } else {
            skoNummer = Math.floor(Math.random()*sko.length)
            toj[i].src = sko[skoNummer].image
          }

          andenPris();
        });
}

//variabler til fjernelse af tøj
let usynlig = [false,false,false,false]
const synlig = document.getElementsByClassName("synlig");




//Se pris
const priser = document.getElementById("pris");


//hvis den er usynlig, så skal den minusses fra summen
function andenPris(){
    let sum = hat[hatNummer].pris + shirt[shirtNummer].pris + bukser[bukserNummer].pris + sko[skoNummer].pris;

    if (usynlig[0] == true) {
        sum = sum - hat[hatNummer].pris
    }

    if(usynlig[1] == true){
        sum = sum - shirt[shirtNummer].pris
    } 

    if(usynlig[2] == true){
        sum = sum - bukser[bukserNummer].pris
    } 

    if(usynlig[3] == true){
        sum = sum - sko[skoNummer].pris
    }

    priser.innerHTML = `${sum},00 kr`
}

//køres når siden startes op
andenPris();


//fjern tøj og kør den funktion der udregner pris
for (let i = 0; i < synlig.length; i++) {
    synlig[i].addEventListener("click", function() {
        if (usynlig[i] == false) {
            synlig[i].src = "img/Toej/hide.png";
            usynlig[i] = true
            toj[i].style.opacity = "0";
            toj[i].style.userSelect = "none";
            toj[i].style.curser = "none";

            andenPris()
    
        } else{
            synlig[i].src = "img/Toej/Show.png";
            usynlig[i] = false
            toj[i].style.opacity = "1";
            toj[i].style.userSelect = "all";
            toj[i].style.curser = "pointer";
            andenPris()
        }
        
        });
        andenPris()
    };

//Gå videre til højre eller venstre
const pilVenstre = document.getElementsByClassName("chevron_left");
const pilHøjre = document.getElementsByClassName("chevron_right");

//for venstre pil
for (let i = 0; i < pilVenstre.length; i++) {
    pilVenstre[i].addEventListener("click", function() {
        if (i == 0) {
            //hvis nummeret når 0
            if (hatNummer == 0) {
                hatNummer = hat.length-1
                toj[i].src = hat[hatNummer].image
            } else{
                hatNummer = hatNummer-1
                toj[i].src = hat[hatNummer].image
            }

          } else if (i == 1) {
            //hvis nummeret når 0
            if (shirtNummer == 0) {
                shirtNummer = shirt.length-1
                toj[i].src = shirt[shirtNummer].image
            } else{
                shirtNummer = shirtNummer-1
                toj[i].src = shirt[shirtNummer].image
            }

          } else if (i == 2) {
            //hvis nummeret når 0
            if (bukserNummer == 0) {
                bukserNummer = bukser.length
                toj[i].src = bukser[bukserNummer].image
            } else{
                bukserNummer = bukserNummer-1
                toj[i].src = bukser[bukserNummer].image
            }
          } else {
            //hvis nummeret når 0
            if (skoNummer == 0) {
                skoNummer = sko.length
                toj[i].src = sko[skoNummer].image
            } else{
                skoNummer = skoNummer-1
                toj[i].src = hat[skoNummer].image
            }
          }

          andenPris();
        });

//for venstre pil
    pilHøjre[i].addEventListener("click", function() {
        if (i == 0) {
            //hvis nummeret når max
            if (hatNummer == hat.length-1) {
                hatNummer = 0
                toj[i].src = hat[hatNummer].image
            } else{
                hatNummer = hatNummer + 1
                toj[i].src = hat[hatNummer].image
            }

          } else if (i == 1) {
            //hvis nummeret når max
            if (shirtNummer == shirt.length-1) {
                shirtNummer = 0
                toj[i].src = shirt[shirtNummer].image
            } else{
                shirtNummer = shirtNummer + 1
                toj[i].src = shirt[shirtNummer].image
            }

          } else if (i == 2) {
            //hvis nummeret når max
            if (bukserNummer == bukser.length-1) {
                bukserNummer = 0
                toj[i].src = bukser[bukserNummer].image
            } else{
                bukserNummer = bukserNummer + 1
                toj[i].src = bukser[bukserNummer].image
            }
          } else {
            //hvis nummeret når max
            if (skoNummer == sko.length-1) {
                skoNummer = 0
                toj[i].src = sko[skoNummer].image
            } else{
                skoNummer = skoNummer + 1
                toj[i].src = sko[skoNummer].image
            }
          }

          las[i].src = "img/Toej/lock-open.png";
          låst[i] = false
          andenPris();
        });
    };






// låsefunktion
let låst = [false,false,false,false]
const las = document.getElementsByClassName("las");


for (let i = 0; i < las.length; i++) {
las[i].addEventListener("click", function() {
    if (låst[i] == false) {
        las[i].src = "img/Toej/lock-closed.png";
        låst[i] = true
    } else{
        las[i].src = "img/Toej/lock-open.png";
        låst[i] = false
    }
    
    });
};
