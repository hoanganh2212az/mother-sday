document.getElementById('messageBtn').addEventListener('click', function() {
    var message = document.getElementById('specialMessage');
    var fireworks = document.getElementById('fireworks');
    var fireworksSound = document.getElementById('fireworksSound');

    // Toggle message display
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
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
