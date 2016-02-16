$(function() {
  'use strict';

  $('#song').keyup(function() {
    var max = 140;
    var len = $(this).val().length;
    var char = max - len;
    if (len >= max) {
      $('#charNum').text(' you have reached the limit');
    } else {
      var char = max - len;
      $('#char-num').text(char + ' characters left');
    }
  });

  $('.btn').on('click', function() {
    $('.modal-container').addClass('showing');
  });

  $('.modal-close').on('click', function() {
    $('.modal-container').removeClass('showing');
  })

    $('.modal').click(function() {
        submit.stopPropagation();
    });
   });
