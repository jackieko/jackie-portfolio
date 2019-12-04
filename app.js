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

//Get the button:
mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
