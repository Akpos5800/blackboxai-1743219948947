// Generate random marketplace listings
const listings = [
    {
        title: "Digital Security Suite",
        description: "Complete anonymity package with VPN, encrypted email, and secure messaging.",
        price: (Math.random() * 2 + 0.5).toFixed(3),
        currency: "BTC"
    },
    {
        title: "E-Book Collection",
        description: "10,000+ books on various topics including technology, philosophy, and more.",
        price: (Math.random() * 0.5 + 0.1).toFixed(3),
        currency: "XMR"
    },
    {
        title: "Artifact Archive",
        description: "Rare digital artifacts from early internet history.",
        price: (Math.random() * 5 + 1).toFixed(3),
        currency: "BTC"
    },
    {
        title: "Privacy Tools",
        description: "Custom privacy-enhancing software tools.",
        price: (Math.random() * 3 + 0.8).toFixed(3),
        currency: "ETH"
    }
];

function generateListings() {
    const listingsContainer = document.getElementById('listings');
    
    listings.forEach(item => {
        const listingElement = document.createElement('div');
        listingElement.className = 'listing';
        
        listingElement.innerHTML = `
            <h3>[ID: ${Math.random().toString(36).substring(2, 8).toUpperCase()}] ${item.title}</h3>
            <p>${item.description}</p>
            <p class="price">Price: ${item.price} ${item.currency}</p>
            <button class="view-btn">View Details</button>
        `;
        
        listingsContainer.appendChild(listingElement);
    });

    // Add button hover effects
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.textContent = '> View Details <';
        });
        btn.addEventListener('mouseleave', () => {
            btn.textContent = 'View Details';
        });
    });
}

document.addEventListener('DOMContentLoaded', generateListings);