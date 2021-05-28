var countDownDate = new Date ("may 28, 2021 17:30:00").getTime();


var x = setInterval(function(){
var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// visa resultaten i elementet med id "para"
document.getElementById("para").innerHTML = days + " Dagar " + hours + " Timmar " + minutes + " Minuter " + seconds + " Sekunder ";

//när countdown är klar skriv ut
if (distance < 0) {
    clearInterval(x);
    document.getElementById("para").innerHTML = "Om du läser detta, grattis! Du klarade det. Du är nu examinerad .NET webbutvecklare!!! GRATTIS!";
}
}, 1000);
