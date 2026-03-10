let text = document.querySelector("#text");
let button = document.querySelector("#btn");

button.addEventListener("click", function () {
  text.textContent = "You clicked the button!";
  text.style.color = "blue";
});
