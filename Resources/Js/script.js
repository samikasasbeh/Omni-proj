$(document).ready(function(){

    //this is ffor sticky navigation
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: `60px`
      });



    //scroll down buttons
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plan').offset().top}, 1000)
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    ///navigation scroll/////////////////////////////////////

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

///animations on scroll///////////////////////////////////////////////////////

$('.js--wp-1').waypoint((direction) =>{
  $('.js--wp-1').addClass('animate__animated animate__fadeIn');
}, {
  offset: '70%' 
});
$('.js--wp-2').waypoint((direction) =>{
  $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
}, {
  offset: '70%' 
});
$('.js--wp-3').waypoint((direction) =>{
  $('.js--wp-3').addClass('animate__animated animate__fadeIn');
}, {
  offset: '70%' 
});
$('.js--wp-4').waypoint((direction) =>{
  $('.js--wp-4').addClass('animate__animated animate__pulse');
}, {
  offset: '70%' 
});
});

/*mobile nav*/
$('.js--nav-icon').click( () => {
  const nav = $('.js--main-nav');

  nav.slideToggle(200)
})







