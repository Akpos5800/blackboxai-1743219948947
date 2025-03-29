// Terminal typing effect
const messages = [
    "Initializing connection...",
    "Routing through Tor network...",
    "Establishing secure channel...",
    "Welcome to the dark web.",
    "Choose your destination:"
];

const typingElement = document.getElementById('typing-effect');
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentMessage = messages[messageIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentMessage.length) {
        typingSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        typingSpeed = 500;
    }

    setTimeout(typeWriter, typingSpeed);
}

// Simulate cryptocurrency ticker
function updateCryptoTicker() {
    const cryptos = [
        { name: "BTC", price: Math.random() * 10000 + 20000 },
        { name: "XMR", price: Math.random() * 100 + 100 },
        { name: "ETH", price: Math.random() * 1000 + 1000 }
    ];
    
    const ticker = cryptos.map(crypto => 
        `${crypto.name}: $${crypto.price.toFixed(2)}`
    ).join(' | ');
    
    const tickerElement = document.createElement('div');
    tickerElement.className = 'crypto-ticker';
    tickerElement.textContent = ticker;
    
    const existingTicker = document.querySelector('.crypto-ticker');
    if (existingTicker) {
        existingTicker.replaceWith(tickerElement);
    } else {
        document.querySelector('.terminal').prepend(tickerElement);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    updateCryptoTicker();
    setInterval(updateCryptoTicker, 5000);
    
    // Add cursor blink effect
    const cursor = document.createElement('span');
    cursor.className = 'blink';
    cursor.textContent = '_';
    typingElement.appendChild(cursor);
});