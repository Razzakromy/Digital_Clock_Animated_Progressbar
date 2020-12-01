const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const progress = document.querySelector("#progress_bar");

function showCurrentTime() {
  let date = new Date();
  let hr = date.getHours()  // % 12 || 12 // 12h instead of 24h, with 12 instead of 0. ;
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;

  progress.style.width = (sec / 60) * 100 + "%";
}

setInterval(showCurrentTime, 1000);
