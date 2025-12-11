// main.js
const nav = document.querySelector('.top-nav');
const toggle = document.querySelector('.nav-toggle');

if (nav && toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("get-started-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      // Change this filename if your executive summary page is named differently
      window.location.href = "executive-summary.html";
    });
  }
});
