$( document.body ).click(function() {
  $( "path" ).each(function() {
    if ( $(this).hasClass('green') || $(this).hasClass('purple2green') ) {
      $(this).removeClass();
      $(this).addClass('green2blue arrow');
      console.log("changed green to blue");
    } 
    else if ( $(this).hasClass('purple') || $(this).hasClass('blue2purple') ) {
      $(this).removeClass();
      $(this).addClass('purple2green arrow');
      console.log("changed purple to green");
    } 
    else if ( $(this).hasClass('blue') || $(this).hasClass('green2blue') ) {
      $(this).removeClass();
      $(this).addClass('blue2purple arrow');
      console.log("changed blue to purple");
    } 
  });
});