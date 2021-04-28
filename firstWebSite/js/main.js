
$(function () {
  'use strict'

  var winH = $(window).height();
  var upperH = $('.upper-bar').innerHeight();
  var navH = $('.navbar').innerHeight();
  $('.sliderr, .carousel-item').height(winH - (upperH + navH));

  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffled-images .row .col-md').css('opacity', 1);
    }
    else {
      $('.shuffled-images .row .col-md').css('opacity', 0.08);
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });
  $('.upper-bar .click-here').on('click', function () {
    alert("Dont use plastic items");


  });






});