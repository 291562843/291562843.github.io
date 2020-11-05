function _music(){
    var audio = document.getElementById("audio");
    var bgmbt = document.getElementById("bt");
    if (audio.paused){
        audio.play();
        bgmbt.textContent = "BGM Pause";
    }
    else{
        audio.pause();
        bgmbt.textContent = "BGM Play";
    }

}