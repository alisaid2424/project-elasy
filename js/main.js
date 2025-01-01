let countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  // Navigation scroll to up with btn
  if (window.scrollY >= 200) {
    document.querySelector(".btn-scroll-top").style.display = "block";
    document.querySelector(".btn-scroll-top").style.opacity = "1";
  } else {
    document.querySelector(".btn-scroll-top").style.display = "none";
    document.querySelector(".btn-scroll-top").style.opacity = "0";
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

document.querySelector(".btn-scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".date-year").forEach((el) => {
  el.innerHTML = new Date().getFullYear();
});
