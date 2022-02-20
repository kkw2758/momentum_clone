const quotes = [
  {
    quote: "We do not stop exercising because we grow old, we grow old because we stop exercising.",
    author: "Kenneth Cooper"
  },
  {
    quote: "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.",
    author: "John F.Kennedy"
  },
  {
    quote: "You have to exercise, or at some point you'll just break dwon.",
    author: "Barack Obama"
  },
  {
    quote: "If you don't make time for exercise, you'll probably have to make time for illness.",
    author: "Robin Sharma"
  },
  {
    quote: "The reason I exercise is for the quality of life I enjoy.",
    author: "Kenneth H. Cooper"
  },
  {
    quote: "Life begins at the end of your comfort zone.",
    author: "Unknown"
  },
  {
    quote: "When you feel like stopping, think about why you started.",
    author: "Unknown"
  },
  {
    quote: "The pain you feel today will be the strength you feel tomorrow.",
    author: "Unknown"
  },
  {
    quote: "It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.",
    author: "Socrates"
  },
  {
    quote: "All thing are difficult before they are easy.",
    author: "Unknown"
  }
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;