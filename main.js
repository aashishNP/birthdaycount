


var countDownDate = new Date("May 3, 2022 12:00:0").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("time").innerHTML = days + "days: " + hours + "hours: "
  + minutes + "minutes: " + seconds + "seconds: ";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "It's my Birthday today";
  }
}, 1000);
