//profit calculator
//reading input values
function calculate() {
    var vehicles = Number(document.getElementById("veh").value);
    var target = Number(document.getElementById("tgt").value);
    var expenses = Number(document.getElementById("exp").value);
    var days = Number(document.getElementById("days").value);
    var lostPercentage = Number(document.getElementById("leak").value);



    //calculating profit
    var income = vehicles * target * days;
    var lostIncome = income * (lostPercentage / 100);
    var totalExpenses = expenses * days * vehicles;
    var profitWithout = income - lostIncome - totalExpenses;
    var profitWith = income - totalExpenses;

    //displaying results
    document.getElementById("o1").textContent = "KES " + income;
    document.getElementById("o2").textContent = "KES " + lostIncome;
    document.getElementById("o3").textContent = "KES " + totalExpenses;
    document.getElementById("o4").textContent = "KES " + profitWithout;
    document.getElementById("o5").textContent = "KES " + profitWith;

}

calculate(); //display results on page load

//calculate button event listener
document.getElementById("calcbtn").addEventListener("click", calculate);


fetch('db.json')
    .then(response => response.json())
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

//copyright year update
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

//slides js
var track = document.querySelector(".track");
var total = document.querySelectorAll(".slide").length;
var current = 0;

setInterval(function () {
    current = (current + 1) % total;
    track.style.transform = "translateX(-" + current * 100 + "%)";
}, 2000);