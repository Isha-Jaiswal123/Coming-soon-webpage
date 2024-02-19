let second = document.querySelector(".seconds .number");
let minute = document.querySelector(".minutes .number");
let hour = document.querySelector(".hours .number");
let day = document.querySelector(".days .number");

let secondval = 60;
let minuteval = 60;
let hourval = 2;
let dayval = 9;

let timefunction = setInterval(() => {
  secondval--;
  if (secondval == 0) {
    minuteval--;
    secondval = 60;
  }

  second.innerHTML = secondval;

  if (minuteval == 0) {
    hourval--;
    minuteval = 60;
  }
  minute.innerHTML = minuteval;

  if (hourval == 0) {
    dayval--;
    hourval = 24;
  }
  hour.innerHTML = hourval;

  if (dayval == 0) {
    secondval = 0;
    minuteval = 0;
    hourval = 0;
  }
  day.innerHTML = dayval;
  second.innerHTML = secondval;
  minute.innerHTML = minuteval;
  hourval.innerHTML = hourval;
}, 1000);
