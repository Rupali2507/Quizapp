const btn = document.querySelector(".start_btn");

const home1 = document.querySelector("#home1");
const home2 = document.querySelector("#home2");
const rate1 = document.querySelector("#rate1");
const rate2 = document.querySelector("#rate2");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

home1.addEventListener("click", () => {
  window.location.href = "index.html";
});
home2.addEventListener("click", () => {
  window.location.href = "index.html";
});
rate1.addEventListener("click", () => {
  window.location.href = "Rate.html";
});
rate2.addEventListener("click", () => {
  window.location.href = "Rate.html";
});
score1.addEventListener("click", () => {
  window.location.href = "Score.html";
});
score2.addEventListener("click", () => {
  window.location.href = "Score.html";
});
btn.addEventListener("click", () => {
  window.location.href = "index1.html";
});

function showSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "flex";
}

function collapseSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "none";
}
