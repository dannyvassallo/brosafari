// PEOPLE ANIMATION FUNCTION //

function people(el, animclass){
  $( el ).mouseenter(function(){
    $( this ).animate({ "top": "-=10px" }, "fast" ).addClass( animclass );
  });

  $( el ).mouseleave(function(){
    $( this ).animate({ "top": "+=10px" }, "fast" ).removeClass( animclass );
  });
}


// TITLE //

$('.title').mouseenter(function(){
  $( this ).addClass('pulse');
});

$('.title').mouseleave(function(){
  $( this ).removeClass('pulse');
});

people('.mc', 'tossing');
people('.ufo', 'tossing');
people('.ape', 'tossing');
people('.crn', 'tossing');
people('.etc', 'tossing');
people('.craze', 'tossing');
people('.thuglife', 'tossing');
