// FUNCTION //
    var audiotypes={
        "mp3": "audio/mpeg",
        "mp4": "audio/mp4",
        "ogg": "audio/ogg",
        "wav": "audio/wav"
    }
 
    function ss_soundbits(sound){
        var audio_element = document.createElement('audio')
        if (audio_element.canPlayType){
            for (var i=0; i<arguments.length; i++){
                var source_element = document.createElement('source')
                source_element.setAttribute('src', arguments[i])
                if (arguments[i].match(/\.(\w+)$/i))
                    source_element.setAttribute('type', audiotypes[RegExp.$1])
                audio_element.appendChild(source_element)
            }
            audio_element.load()
            audio_element.playclip=function(){
                audio_element.pause()
                audio_element.currentTime=0
                audio_element.play()
            }
            return audio_element
        }
    }
 
// SOUND ASSIGNMENT

    var bark  = ss_soundbits("https://s3.amazonaws.com/myfangate.com/brosafari/sounds/bark.mp3", "https://s3.amazonaws.com/myfangate.com/brosafari/sounds/bark.wav", "https://s3.amazonaws.com/myfangate.com/brosafari/sounds/bark.ogg");
    var oink  = ss_soundbits("https://s3.amazonaws.com/myfangate.com/brosafari/sounds/oink.mp3", "https://s3.amazonaws.com/myfangate.com/brosafari/sounds/oink.wav", "https://s3.amazonaws.com/myfangate.com/brosafari/sounds/oink.ogg");
 
 
// CLICK EVENTS

$('.dog').click(function(){
    bark.playclip();
});

$('.pig').click(function(){
    oink.playclip();
});
 
