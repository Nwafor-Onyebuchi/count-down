const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);

const currentDate = new Date(Date.now());
const dayofWeek = () => {
  if (currentDate.getDay() === 0) {
    return "Sunday";
  } else if (currentDate.getDay() === 1) {
    return "Monday";
  } else if (currentDate.getDay() === 2) {
    return "Tuesday";
  } else if (currentDate.getDay() === 3) {
    return "Wednesday";
  } else if (currentDate.getDay() === 4) {
    return "Thursday";
  } else if (currentDate.getDay() === 5) {
    return "Friday";
  } else if (currentDate.getDay() === 6) {
    return "Saturday";
  } else {
    return "Sunday";
  }
};

const month = () => {
  if (currentDate.getMonth() === 0) {
    return "January";
  } else if (currentDate.getMonth() === 1) {
    return "February";
  } else if (currentDate.getMonth() === 2) {
    return "March";
  } else if (currentDate.getMonth() === 3) {
    return "April";
  } else if (currentDate.getMonth() === 4) {
    return "May";
  } else if (currentDate.getMonth() === 5) {
    return "June";
  } else if (currentDate.getMonth() === 6) {
    return "July";
  } else if (currentDate.getMonth() === 7) {
    return "August";
  } else if (currentDate.getMonth() === 8) {
    return "September";
  } else if (currentDate.getMonth() === 9) {
    return "October";
  } else if (currentDate.getMonth() === 10) {
    return "November";
  } else if (currentDate.getMonth() === 11) {
    return "December";
  }
};

const ordinal_suffix_of = (i) => {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
};

const currenDateEl = document.getElementById("current");
currenDateEl.innerHTML = `<h1 class="current">${dayofWeek()}, ${month()} ${ordinal_suffix_of(
  currentDate.getDate()
)}</h1>`;
