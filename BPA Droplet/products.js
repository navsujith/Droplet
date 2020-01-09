/* Responsive */
@media (max-width: 940%) {
  .container {
    flex-direction: column;
    margin-top: 60%;
  }
 
  .left-column,
  .right-column {
    width: 100%;
  }
 
  .left-column img {
    width: 300%;
    right: 0;
    top: 65%;
    left: initial;
  }
}
 
@media (max-width: 535%) {
  .left-column img {
    width: 220%;
    top: -85%;
  }
}

$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });
 
});
