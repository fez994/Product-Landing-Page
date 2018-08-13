$( document ).ready(function() {
   $('#youtube_video').fitVids();

   // Smooth scroll 
  $("#nav a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

});