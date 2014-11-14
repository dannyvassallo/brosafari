var loader = 0;
var totalEl = $(".imageloader > img").length
var percentage = 806 / totalEl

function incrementLoader(){
  $(loader = loader + 1);
  $('.actualbar').css({"width":"+="+percentage+"px"});
}



  if (loader = totalEl){
    $('.loading-animation').delay( 800 ).fadeOut( 2000 );
  }
