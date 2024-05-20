const olFyld = document.getElementById("loading_fyld_ol");
const skum = document.getElementById("skum"); 

window.addEventListener("load", function() {
    olFyld.style.transition = "3s all ease-in-out";
    olFyld.setAttribute("d", "M276.805 540.217V110.439H-59.707V540.217H276.805Z")

    skum.style.transition = "3s all ease-in-out";
    skum.setAttribute("d", "M276.805 35.4496H-59.707V110.439H276.805V35.4496Z")

    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);

  });