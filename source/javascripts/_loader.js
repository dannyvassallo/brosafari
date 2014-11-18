var totalEl = $(".imageloader > img").length
var percentage = 806 / totalEl


function incrementLoader(){
  $('.actualbar').css({"width":"+="+percentage+"px"});
  
  if ($('.actualbar').width() >= 799){
    $('.loading-animation').delay( 400 ).fadeOut( 1000 );
  }

}
