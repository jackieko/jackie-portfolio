$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open').toggleClass('close');
    $(".overlay").fadeToggle(200);
  });
});

$('.close').on('click', function() {
  $(".overlay").fadeToggle(200);
  $('#nav-icon3').toggleClass('open').toggleClass('close');
})

$('#overlay-btn').on('click', function() {
  $(".overlay").fadeToggle(200);
  $('#nav-icon3').toggleClass('open').toggleClass('close');
})
