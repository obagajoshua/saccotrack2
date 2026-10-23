var track = document.querySelector(".track");
var total = document.querySelectorAll(".slide").length;
var current = 0;

setInterval(function () {
    current = (current + 1) % total;
    track.style.transform = "translateX(-" + current * 100 + "%)";
}, 4000);