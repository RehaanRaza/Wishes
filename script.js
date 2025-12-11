document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openSurpriseBtn');
    const closeBtn = document.getElementById('closePopupBtn');
    const popup = document.getElementById('surprisePopup');
    
    // Define the Pink Paradise Color Palette for effects
    const PINK_PALETTE = ['#FF69B4', '#FFC0CB', '#FEE7F0', '#ffffff']; 

    // --- 1. Particles Background Setup (Soft and Romantic) ---
    particlesJS('particles-js', { 
        "particles": {
            "number": { "value": 60 },
            "color": { "value": "#FFC0CB" }, // Light pink particles
            "shape": { "type": "circle" },
            "opacity": { "value": 0.7 },
            "size": { "value": 4, "random": true },
            "line_linked": { "enable": true, "distance": 180, "color": "#FFD1DC", "opacity": 0.4 }, // Blush pink lines
            "move": { "enable": true, "speed": 1.8 }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "bubble" } }, // Particles react to hover
        },
        "retina_detect": true
    });

    // --- 2. Initial Confetti Burst on Page Load (Welcome Effect) ---
    // A gentle burst to start the experience
    setTimeout(() => {
        confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
            colors: PINK_PALETTE
        });
    }, 500);


    // --- 3. The Grand Heart Shower on Click! ---
    openBtn.addEventListener('click', () => {
        // First, shower the screen with red hearts
        confetti({
            particleCount: 250, // Lots of hearts!
            spread: 180, // Wide spread
            origin: { y: 0.5 }, // From the center
            colors: ['#FF0000', '#FF4081', '#FF69B4'], // Predominantly red hearts
            shapes: ['heart'], // ONLY hearts
            scalar: 1.5 // Larger hearts
        });

        // After a brief delay, show the popup with its animation
        setTimeout(() => {
            popup.style.display = 'flex';
            // Trigger the CSS Enchanted Petal Unfold transition
            setTimeout(() => {
                popup.classList.add('show');
                
                // Secondary, more subtle confetti for the letter itself
                confetti({
                    particleCount: 80,
                    spread: 90,
                    origin: { y: 0.6 },
                    colors: PINK_PALETTE,
                    disableForced: true,
                    scalar: 0.8 // Smaller confetti for elegance
                });

            }, 50); // Small delay for display block before animation starts
        }, 300); // Delay the popup to let the heart shower happen first
    });

    const closePopup = () => {
        popup.classList.remove('show');
        // Wait for the reverse transition (1.5s) before hiding the display
        setTimeout(() => {
            popup.style.display = 'none';
        }, 1500); 
    };

    closeBtn.addEventListener('click', closePopup);
    
    // Close on click outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
            closePopup();
        }
    });
});