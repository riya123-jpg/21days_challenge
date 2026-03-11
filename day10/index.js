let clickbtn = document.querySelector("#clickBtn");
let countText = document.querySelector("#count");

let themeBtn = document.querySelector("#themeBtn");
let count = 0;

clickbtn.addEventListener("click", () => {
  count++;
  countText.textContent = count + " clicks";
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
