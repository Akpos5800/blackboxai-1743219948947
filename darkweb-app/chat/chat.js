// Generate random anonymous username
const adjectives = ['Shadow', 'Ghost', 'Phantom', 'Cipher', 'Void', 'Stealth', 'Incognito'];
const nouns = ['Hacker', 'Traveler', 'Agent', 'Observer', 'Entity', 'Nomad', 'Wanderer'];
const randomUsername = `${adjectives[Math.floor(Math.random() * adjectives.length)]}_${nouns[Math.floor(Math.random() * nouns.length)]}`;

// Simulated encrypted chat
document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const selfDestructCheckbox = document.getElementById('self-destruct');
    
    // Display welcome message
    addSystemMessage('Secure channel established. Your anonymous ID: ' + randomUsername);
    addSystemMessage('All messages are end-to-end encrypted.');

    // Generate some initial messages
    setTimeout(() => {
        addMessage('Dark_Entity', 'New marketplace listings just dropped');
        setTimeout(() => {
            addMessage('Cipher_Agent', 'Has anyone tried the new privacy tools?');
        }, 2000);
    }, 1500);

    // Handle message input
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && messageInput.value.trim()) {
            const message = messageInput.value;
            messageInput.value = '';
            
            // Simulate encryption
            addMessage(randomUsername, message, true);
            
            // Generate random response
            if (Math.random() > 0.5) {
                setTimeout(() => {
                    const responses = [
                        'Interesting point...',
                        'I disagree',
                        'Can you explain more?',
                        'Let\'s take this to private messages',
                        'Be careful what you share here'
                    ];
                    addMessage('Unknown_' + Math.floor(Math.random() * 1000), responses[Math.floor(Math.random() * responses.length)]);
                }, 1000 + Math.random() * 3000);
            }
        }
    });

    function addMessage(username, text, isSelf = false) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageElement.innerHTML = `
            <span class="username">${username}${isSelf ? ' (you)' : ''}</span>
            <span class="time">${time}</span>
            <div>${text}</div>
        `;
        
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // Self-destruct functionality
        if (selfDestructCheckbox.checked && !isSelf) {
            setTimeout(() => {
                messageElement.style.opacity = '0.5';
                setTimeout(() => {
                    messageElement.style.display = 'none';
                }, 1000);
            }, 10000);
        }
    }

    function addSystemMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message system';
        messageElement.innerHTML = `<span style="color: var(--secondary)">[SYSTEM] ${text}</span>`;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});