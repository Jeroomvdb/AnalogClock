function setDate() {
  const clockHours = document.querySelector(".hours");
  const clockMinutes = document.querySelector(".minutes");
  const clockSeconds = document.querySelector(".seconds");

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  clockSeconds.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = (minutes / 60) * 360 + 90;
  clockMinutes.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegrees = (hours / 24) * 360 + 90;
  clockHours.style.transform = `rotate(${hoursDegrees}deg)`;
}

setDate();
setInterval(setDate, 1000);
