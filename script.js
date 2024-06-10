// Defina a data-alvo do evento
var targetDate = new Date("2024-07-20T23:59:59");

function updateCountdown() {
  var currentDate = new Date();
  var difference = targetDate - currentDate;

  // Converta a diferença em dias, horas, minutos e segundos
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Exiba o temporizador na página
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Atualize a cada segundo
  setTimeout(updateCountdown, 1000);
}

// Inicie o temporizador
updateCountdown();
