var backgroundMusic = document.getElementById('backgroundMusic');
var playButton = document.getElementById('playButton');

playButton.addEventListener('mouseenter', function() {
    backgroundMusic.play();
});

playButton.addEventListener('mouseleave', function() {
    // Do nothing on mouse leave to let the music continue playing
});
