let input = document.querySelector("#nameInput");
let button = document.querySelector("#saveBtn");
let message = document.querySelector("#message");

// Load saved name when page opens
let savedName = localStorage.getItem("username");

if (savedName) {
  message.textContent = "Welcome back, " + savedName;
}

button.addEventListener("click", function () {
  let name = input.value;

  localStorage.setItem("username", name);

  message.textContent = "Saved! Hello " + name;
});
