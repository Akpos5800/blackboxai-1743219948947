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

// Temperature monitoring
let currentTemp = 36;
let isCoolingActive = false;
let tempInterval;

function updateTemperature() {
    // Simulate temperature changes
    const baseTemp = isCoolingActive ? 35 : 45;
    currentTemp = Math.min(
        baseTemp + Math.random() * 15, // Base range
        85 // Max safe temp
    );
    
    // Update UI
    const tempBar = document.querySelector('.temp-bar');
    const tempReading = document.querySelector('.temp-reading');
    const statusElement = document.querySelector('.cooling-status');
    
    tempBar.style.width = `${Math.min(100, (currentTemp / 85) * 100)}%`;
    tempReading.textContent = `${Math.round(currentTemp)}°C`;
    
    // Update status
    if (currentTemp > 70) {
        tempBar.style.background = 'linear-gradient(90deg, #ff3333, #ff9900)';
        statusElement.textContent = 'Status: CRITICAL';
        statusElement.classList.add('critical');
    } else if (isCoolingActive) {
        tempBar.style.background = 'linear-gradient(90deg, #00ff41, #008f11)';
        statusElement.textContent = 'Status: Cooling Active';
        statusElement.classList.remove('critical');
    } else {
        tempBar.style.background = 'linear-gradient(90deg, #00ff41, #ff9900)';
        statusElement.textContent = 'Status: Inactive';
        statusElement.classList.remove('critical');
    }
}

function toggleCooling() {
    isCoolingActive = !isCoolingActive;
    const btn = document.getElementById('cool-btn');
    btn.textContent = isCoolingActive ? 'Deactivate Cooling' : 'Activate Cooling';
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
    
    // Setup cooling functionality
    document.getElementById('cool-btn').addEventListener('click', toggleCooling);
    tempInterval = setInterval(updateTemperature, 2000);
    
    // Show cooling panel when nav link clicked
    document.querySelector('a[href="#cooling"]').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('cooling-panel').classList.toggle('hidden');
    });
});
