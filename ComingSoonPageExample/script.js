function updateCountdown() {
  var countDownDate = new Date("Oct 27, 2024 00:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    distance = 0;
  }

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = padZero(days);
  document.getElementById("hours").innerHTML = padZero(hours);
  document.getElementById("minutes").innerHTML = padZero(minutes);
  document.getElementById("seconds").innerHTML = padZero(seconds);
}

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}

var x = setInterval(updateCountdown, 1000);
