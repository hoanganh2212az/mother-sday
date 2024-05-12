document.getElementById('messageBtn').addEventListener('click', function() {
    var message = document.getElementById('specialMessage');
    var fireworks = document.getElementById('fireworks');
    var fireworksSound = document.getElementById('fireworksSound');
    var greetingImage = document.getElementById('greetingImage');

    // Toggle message display
    if (message.style.display === 'none') {
        message.style.display = 'block';
        greetingImage.style.display = 'block'; // Display image
        setTimeout(function() { greetingImage.style.opacity = 1; }, 10); // Start fade in effect after a short delay
    } else {
        message.style.display = 'none';
        greetingImage.style.opacity = 0; // Reset opacity
        greetingImage.addEventListener('transitionend', function() {
            greetingImage.style.display = 'none'; // Hide image after transition
        }, { once: true });
    }

    // Display fireworks and play sound
    if (fireworks.style.display === 'none') {
        fireworks.style.display = 'block';
        fireworksSound.play();
    } else {
        fireworks.style.display = 'none';
        fireworksSound.pause();
        fireworksSound.currentTime = 0;  // Reset audio to start
    }
});
