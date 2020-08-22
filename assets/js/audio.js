let sound = true;

let MiAudio = document.getElementById("Audio-2");

function Sonido(){
   if(sound){
      MiAudio.src="./audio/anime.ogg";	
      MiAudio.volume = 0.7;
      MiAudio.play();	
   }

}