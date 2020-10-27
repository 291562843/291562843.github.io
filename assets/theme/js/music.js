function _music(){
    var audio = document.getElementById("audio");
    var bgmbt = document.getElementById("bt");
    if (audio.paused){
        audio.play();
        bgmbt.textContent = "Pause Music";
    }
    else{
        audio.pause();
        bgmbt.textContent = "Play Music";
    }

}