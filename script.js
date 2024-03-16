const quotes = [
    "The road not taken.",
    "To be, or not to be, that is the question.",
    "Hope is the thing with feathers that perches in the soul.",
    "I wandered lonely as a cloud.",
    "Two roads diverged in a wood, and I—I took the one less traveled by.",
    "Shall I compare thee to a summer's day?",
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById('quote-text');

function displayQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
}

function getNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    displayQuote();
}

function getPreviousQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    displayQuote();
}

// Display the first quote when the page loads
window.onload = displayQuote;
