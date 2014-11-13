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

var prefix = "https://s3.amazonaws.com/myfangate.com/brosafari/sounds/";
var bark  = ss_soundbits( prefix + "bark.mp3", prefix + "bark.wav", prefix + "bark.ogg");
var oink  = ss_soundbits( prefix + "oink.mp3", prefix + "oink.wav", prefix + "oink.ogg");
var fire  = ss_soundbits( prefix + "fire.mp3", prefix + "fire.wav", prefix + "fire.ogg");
var rocket  = ss_soundbits( prefix + "rocket.mp3", prefix + "rocket.wav", prefix + "rocket.ogg");
var burp  = ss_soundbits( prefix + "burp.mp3", prefix + "burp.wav", prefix + "burp.ogg");
var glass  = ss_soundbits( prefix + "glass.mp3", prefix + "glass.wav", prefix + "glass.ogg");
 
 
// CLICK EVENTS

$('.dog').click(function(){ bark.playclip(); });
$('.pig').click(function(){ oink.playclip(); });
$('.fire').click(function(){ fire.playclip(); }); 
$('.turtle').click(function(){ rocket.playclip(); }); 
$('.chicken').click(function(){ burp.playclip(); }); 
$('.glass').click(function(){ glass.playclip(); }); 
