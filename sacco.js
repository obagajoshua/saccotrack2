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


    document.getElementById("veh").addEventListener("input", calculate);
    document.getElementById("tgt").addEventListener("input", calculate);
    document.getElementById("exp").addEventListener("input", calculate);
    document.getElementById("days").addEventListener("input", calculate);
    document.getElementById("leak").addEventListener("input", calculate);

}

calculate(); //display results on page load