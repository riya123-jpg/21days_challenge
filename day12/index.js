let quotes = [
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },

  {
    quote: "Small progress is still progress.",
    author: "Anonymous",
  },

  {
    quote: "Dream big. Start small. Act now.",
    author: "Robin Sharma",
  },

  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },

  {
    quote: "Consistency beats motivation.",
    author: "Unknown",
  },
];

let button = document.querySelector("#btn");
let quoteText = document.querySelector("#quote");
let authorText = document.querySelector("#author");

button.addEventListener("click", function () {
  quoteText.classList.add("fade");
  authorText.classList.add("fade");

  setTimeout(function () {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    let randomQuote = quotes[randomIndex];

    quoteText.textContent = randomQuote.quote;
    authorText.textContent = "- " + randomQuote.author;

    quoteText.classList.remove("fade");
    authorText.classList.remove("fade");
  }, 300);
});
