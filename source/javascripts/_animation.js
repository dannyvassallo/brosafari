
// PEOPLE ANIMATION FUNCTION //

function people(el, animclass){
  $( el ).mouseenter(function(){
    $( this ).animate({ "top": "-=10px" }, "fast" ).addClass( animclass );
  });

  $( el ).mouseleave(function(){
    $( this ).animate({ "top": "+=10px" }, "fast" ).removeClass( animclass );
  });
}

// TEXT ANIM FUNCTIONS //

function buttons(el, animclass){
$( el ).mouseenter(function(){
  $( this ).addClass( animclass );
});
$( el ).mouseleave(function(){
  $( this ).removeClass( animclass );
});
}

// RUN //
// people //
people('.mc', 'tossing');
people('.ufo', 'tossing');
people('.ape', 'tossing');
people('.crn', 'tossing');
people('.etc', 'tossing');
people('.craze', 'tossing');
people('.thuglife', 'tossing');

// buttons //
buttons('.crazelogo', 'pulse');
buttons('.title', 'pulse');
buttons('.mclogo', 'pulse');
buttons('.etclogo', 'pulse');
buttons('.apelogo', 'pulse');
buttons('.crnlogo', 'pulse');
buttons('.ufologo', 'pulse');
