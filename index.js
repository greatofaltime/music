// script.js
function playMusic(song) {
    var audioPlayer = document.music('audioPlayer');
    audioPlayer.src = song;
    audioPlayer.play();
}
