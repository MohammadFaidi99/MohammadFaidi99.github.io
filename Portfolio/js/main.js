// //navbar active class color
// $("li.nav-item").click(function () {
//   $("li.nav-item").removeClass("active");
//   $(this).addClass("active");
// });

// navbar height
var navH = $('.navbar').innerHeight(); // get the height of the navbar
var winH = $(window).height(); // get the height of the window frame
var profH = $('.profile').innerHeight(); // get the height of the profile section
var knowH = $('.toknowbar').innerHeight(); // get height of the navbar

$('.aboutmeinfo').height(winH - (navH + profH + knowH)); // setting the height of the carousel component


// });
$(document).ready(function () {    //when document is ready
  $(window).scroll(function () {  // when scrolling through the page
    if ($(window).scrollTop() > 180) {   // if we scroll more than 180 pixel from the initial position which is the window then we execute the next line
      $('div.progress > div.progress-bar').addClass("animateme"); // assign animation class to progress bar
    }

  });
});